// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages organisation site: repo Unawa-Cloud/Unawa-Cloud.github.io,
// served on the custom domain in public/CNAME. No `base` — the site lives at
// the domain root, and unawa-cloud.github.io redirects to it.
//
// The apex, not www: the WordPress site this replaces already redirects
// www.unawa.asia to unawa.asia, so every inbound link and indexed result
// points at the apex. `site` feeds the canonical tags and og:url.
export default defineConfig({
  site: 'https://unawa.asia',

  // Astro 7 defaults compressHTML to 'jsx', which strips the whitespace
  // between adjacent inline elements. Keep the v6 behaviour.
  compressHTML: true,
});
