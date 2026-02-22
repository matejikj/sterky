// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://sterky.example';

export default defineConfig({
  output: 'static',
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
});
