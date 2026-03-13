// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://oferguez.github.io',
  base: '/yp_gallery',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
