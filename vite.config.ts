import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH lets the same code deploy to /harfasoft/ (production) or another
// sub-path (e.g. a preview repo). Must start and end with "/".
const base = process.env.BASE_PATH || '/harfasoft/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
