// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://unawa-cloud.github.io/unawa-web-2026/
// If this later moves to a custom domain, set `site` to that domain, drop
// `base`, and add public/CNAME.
export default defineConfig({
  site: 'https://unawa-cloud.github.io',
  base: '/unawa-web-2026',

  // Astro 7 defaults compressHTML to 'jsx', which strips the whitespace
  // between adjacent inline elements. Keep the v6 behaviour.
  compressHTML: true,
});
