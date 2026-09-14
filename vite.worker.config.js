import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  define: { 'process': 'undefined' },
  build: {
    outDir: 'dist/server', emptyOutDir: true, target: 'es2022',
    lib: { entry: 'server/entry.js', formats: ['es'], fileName: () => 'index.js' },
    minify: true,
  },
});
