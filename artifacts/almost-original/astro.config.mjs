// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const port = Number(process.env.PORT) || 4321;

export default defineConfig({
  output: 'static',
  outDir: './dist/public',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  server: { host: '0.0.0.0', port },
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
});
