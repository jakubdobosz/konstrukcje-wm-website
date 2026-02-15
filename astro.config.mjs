import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jakubdobosz.github.io',
  base: '/konstrukcje-wm-website',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    assets: '_assets',
  },
});
