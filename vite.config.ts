import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// BASE_PATH / OUT_DIR let `npm run build:hostinger` build a root-path bundle
// into its own output folder without touching this file — the default
// (no env vars set) is the GitHub Pages build, unchanged.
export default defineConfig(() => {
  return {
    base: process.env.BASE_PATH || '/ThermalEngitech/',
    build: {
      outDir: process.env.OUT_DIR || 'dist',
      rollupOptions: {
        output: {
          // Without this, Rollup's default heuristic lumps react/react-dom
          // (needed immediately, every page) and motion/react (needed only
          // by AboutIntro and the already-lazy Products/Manufacturing/
          // ProductCategory pages) into one shared vendor chunk — and
          // because that chunk also holds react/react-dom, it still gets
          // fetched eagerly on every page load regardless, silently undoing
          // the point of lazy-loading the motion-using pieces at all.
          // Pulling react/react-dom into their own named chunk leaves
          // motion/react reachable only through dynamic-import boundaries,
          // so Rollup's own chunking correctly treats it as lazy.
          manualChunks(id) {
            if (/node_modules\/(react-dom|react|scheduler)\//.test(id)) {
              return 'react-vendor';
            }
          },
        },
      },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: ['.emergentagent.com', '.emergentcf.cloud', 'localhost'],
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
