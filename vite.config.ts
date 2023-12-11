import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      hooks: '/src/hooks',
      modules: '/src/modules',
      pages: '/src/pages',
      services: '/src/services',
      styles: '/src/styles',
      ui: '/src/ui',
    },
  },
});
