import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset links for GitHub Pages
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'animation';
          }
        },
      },
    },
  },
});
