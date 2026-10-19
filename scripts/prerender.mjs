/**
 * Build-time prerender + sitemap generator.
 *
 * After `vite build`, this script serves the built `dist/` folder locally,
 * loads every route in headless Chrome (so React fully renders and the SEO
 * head manager runs), then writes each route's resulting HTML to a static
 * file (e.g. dist/about/index.html). The result is a fully static, crawlable
 * site that needs no server runtime — perfect for Hostinger.
 *
 * Zero npm dependencies: uses Node's http/fs and the system Chrome binary.
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const execFileAsync = promisify(execFile);
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = process.env.OUT_DIR || 'dist';
const DIST = join(ROOT, OUT_DIR);
const SITE_URL = 'https://thermalengitech.com';
const PORT = 5079;

if (!existsSync(DIST)) {
  console.error(`[prerender] ${OUT_DIR}/ not found — run \`vite build\` first.`);
  process.exit(1);
}

// ---- locate Chrome ---------------------------------------------------------
function findChrome() {
  const candidates = [
    process.env.CHROME_BIN,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/root/bin/chromium',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  return candidates.find((p) => { try { return existsSync(p); } catch { return false; } });
}
const CHROME = findChrome();

// ---- routes ----------------------------------------------------------------
const staticRoutes = [
  '/', '/about', '/products',
  '/manufacturing', '/contact', '/request-quote',
];
let productIds = [];
let categorySlugs = [];
try {
  const data = readFileSync(join(ROOT, 'src', 'data.ts'), 'utf8');
  const block = data.slice(data.indexOf('PRODUCTS'), data.indexOf('INDUSTRIES_SERVED ='));
  productIds = [...block.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  const counts = {};
  for (const m of block.matchAll(/category:\s*'([^']+)'/g)) counts[m[1]] = (counts[m[1]] || 0) + 1;
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  // Every category gets a dedicated listing page, even ones with just one product
  categorySlugs = Object.keys(counts).map((name) => slugify(name));
} catch (e) {
  console.warn('[prerender] could not parse product ids:', e.message);
}
const routes = [
  ...staticRoutes,
  ...categorySlugs.map((s) => `/products/category/${s}`),
  ...productIds.map((id) => `/products/${id}`),
];

// ---- always (re)write sitemap.xml + robots.txt -----------------------------
const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === '/' ? '1.0' : r.startsWith('/products/') ? '0.7' : '0.8');
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => `  <url>\n    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority(r)}</priority>\n  </url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log(`[prerender] wrote sitemap.xml (${routes.length} urls)`);

// Placeholder until the real prerender below replaces it — only survives if
// Chrome isn't available (see fallback further down). GitHub Pages (unlike
// the Hostinger .htaccess) has no rewrite rules: it serves this file,
// unmodified, with a 404 status for any URL that isn't a real file. On
// Hostinger, Apache's ErrorDocument 404 serves this same file. Either way
// the real, branded NotFound markup below (not this bare shell) is what
// visitors and crawlers should see.
writeFileSync(join(DIST, '404.html'), readFileSync(join(DIST, 'index.html'), 'utf8'));

if (!CHROME) {
  console.warn('[prerender] No Chrome binary found — skipping HTML prerender; 404.html left as the bare SPA shell.');
  process.exit(0);
}

// ---- tiny static server with SPA fallback ----------------------------------
const template = readFileSync(join(DIST, 'index.html'), 'utf8');
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain',
};

// Mirrors vite.config.ts's `base` (same BASE_PATH env var, same default) so
// the asset URLs baked into the built bundle
// (<script src="/ThermalEngitech/assets/...">) resolve against this local
// test server the same way they do once deployed. Without this, those
// requests 404 under headless Chrome, the bundle never loads, and React
// never mounts — every "prerendered" page silently comes out as an empty
// shell.
const rawBase = process.env.BASE_PATH || '/ThermalEngitech/';
const BASE_PATH = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

const server = createServer((req, res) => {
  const rawPath = decodeURIComponent(req.url.split('?')[0]);
  const urlPath = BASE_PATH && rawPath.startsWith(BASE_PATH) ? (rawPath.slice(BASE_PATH.length) || '/') : rawPath;
  const ext = extname(urlPath);
  if (ext) {
    const file = join(DIST, urlPath);
    if (existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(readFileSync(file));
      return;
    }
    res.writeHead(404); res.end('Not found'); return;
  }
  // No extension => an app route: serve the SPA template so Chrome can render it
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(template);
});

// Renders one route in headless Chrome and returns its full HTML, or null if
// rendering failed or never actually mounted (see the root-markup check
// below) — shared by the real routes and the dedicated 404 page.
async function renderRoute(route) {
  const url = `http://localhost:${PORT}${BASE_PATH}${route}`;
  let html;
  try {
    const { stdout } = await execFileAsync(CHROME, [
      '--headless=old', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
      '--disable-dev-shm-usage', '--no-first-run', '--no-default-browser-check',
      '--disable-background-networking', '--disable-background-timer-throttling',
      '--disable-breakpad', '--disable-client-side-phishing-detection',
      '--disable-component-update', '--disable-default-apps', '--disable-domain-reliability',
      '--disable-extensions', '--disable-sync', '--metrics-recording-only', '--mute-audio',
      '--no-pings', '--disable-features=Translate,BackForwardCache,MediaRouter,OptimizationHints',
      `--user-data-dir=/tmp/te-prerender-profile`,
      '--virtual-time-budget=7000', '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, timeout: 40000 });
    html = stdout;
  } catch (e) {
    console.warn(`[prerender] ${route} failed (${e.message})`);
    return null;
  }
  // Checking for the shell string alone isn't enough to prove React
  // actually mounted into it — an empty, never-hydrated <div id="root">
  // contains that exact string too, which is exactly how the base-path
  // bug above went unnoticed (every route "succeeded" this check while
  // writing a blank page). Require the root to actually have children.
  if (!html || !html.includes('<div id="root">') || /<div id="root">\s*<\/div>/.test(html)) {
    console.warn(`[prerender] ${route} produced no root markup`);
    return null;
  }
  return html.startsWith('<!DOCTYPE') || html.startsWith('<!doctype') ? html : `<!doctype html>\n${html}`;
}

async function run() {
  await new Promise((r) => server.listen(PORT, r));
  console.log(`[prerender] serving dist/ on :${PORT} via ${CHROME}`);

  for (const route of routes) {
    const full = await renderRoute(route);
    if (!full) { console.warn(`[prerender] ${route} — leaving SPA fallback`); continue; }
    const outDir = route === '/' ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), full);
    console.log(`[prerender] ✓ ${route}`);
  }

  // Dedicated 404 page: "/404" isn't a registered route, so React Router's
  // catch-all renders the real, branded NotFound component for it — the
  // same markup a visitor would see, not the bare SPA shell. Written flat as
  // dist/404.html (not dist/404/index.html) because that's the exact path
  // both GitHub Pages' and Apache's (ErrorDocument 404) 404 handling expect.
  const notFound = await renderRoute('/404');
  if (notFound) {
    writeFileSync(join(DIST, '404.html'), notFound);
    console.log('[prerender] ✓ 404.html (branded NotFound page)');
  } else {
    console.warn('[prerender] 404 render failed — 404.html left as the bare SPA shell.');
  }

  server.close();
  console.log('[prerender] done.');
}

run().catch((e) => { console.error(e); server.close(); process.exit(1); });
