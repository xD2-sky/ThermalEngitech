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
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://thermalengitech.com';
const PORT = 5079;

if (!existsSync(DIST)) {
  console.error('[prerender] dist/ not found — run `vite build` first.');
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
  '/manufacturing', '/certifications', '/contact', '/request-quote',
];
let productIds = [];
let categorySlugs = [];
try {
  const data = readFileSync(join(ROOT, 'src', 'data.ts'), 'utf8');
  const block = data.slice(data.indexOf('PRODUCTS'), data.indexOf('INDUSTRIES ='));
  productIds = [...block.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  const counts = {};
  for (const m of block.matchAll(/category:\s*'([^']+)'/g)) counts[m[1]] = (counts[m[1]] || 0) + 1;
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  // Only multi-product categories get a dedicated listing page (single-product ones redirect to details)
  categorySlugs = Object.entries(counts).filter(([, n]) => n > 1).map(([name]) => slugify(name));
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

// GitHub Pages (unlike the Hostinger .htaccess above) has no rewrite rules —
// it serves this file's content, unmodified, for any URL that isn't a real
// file, while leaving the actual requested URL in the address bar. Copying
// the plain app shell here (before the loop below overwrites dist/index.html
// with prerendered Home markup) means client-side React Router still reads
// the real location and renders the right route, including the branded 404
// page for a genuinely unmatched path.
writeFileSync(join(DIST, '404.html'), readFileSync(join(DIST, 'index.html'), 'utf8'));
console.log('[prerender] wrote 404.html (GitHub Pages SPA fallback)');

if (!CHROME) {
  console.warn('[prerender] No Chrome binary found — skipping HTML prerender (SPA fallback still works).');
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
const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
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

async function run() {
  await new Promise((r) => server.listen(PORT, r));
  console.log(`[prerender] serving dist/ on :${PORT} via ${CHROME}`);

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
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
      console.warn(`[prerender] ${route} failed (${e.message}) — leaving SPA fallback`);
      continue;
    }
    if (!html || !html.includes('<div id="root">')) {
      console.warn(`[prerender] ${route} produced no root markup — skipped`);
      continue;
    }
    const full = html.startsWith('<!DOCTYPE') || html.startsWith('<!doctype')
      ? html
      : `<!doctype html>\n${html}`;
    const outDir = route === '/' ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), full);
    console.log(`[prerender] ✓ ${route}`);
  }

  server.close();
  console.log('[prerender] done.');
}

run().catch((e) => { console.error(e); server.close(); process.exit(1); });
