// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages organisation site: repo Unawa-Cloud/Unawa-Cloud.github.io,
// served on the custom domain in public/CNAME. No `base` — the site lives at
// the domain root, and unawa-cloud.github.io redirects to it.
export default defineConfig({
  site: 'https://www.unawa.asia',

  // Astro 7 defaults compressHTML to 'jsx', which strips the whitespace
  // between adjacent inline elements. Keep the v6 behaviour.
  compressHTML: true,
});
