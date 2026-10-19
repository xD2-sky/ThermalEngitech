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
