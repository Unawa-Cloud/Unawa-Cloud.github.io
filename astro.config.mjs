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

  // URLs the old site served that have no page of their own here. On a static
  // build these become small HTML redirect documents, which is what we want:
  // the link keeps working and search engines are told where it went, without
  // the same article being served at two addresses.
  redirects: {
    // Published twice on WordPress, as a post under its category and as a
    // top-level page. The category URL matches every other article, so it wins.
    // Both spellings: WordPress served the trailing-slash form, and the dev
    // server matches keys literally even though the build emits a directory.
    '/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay':
      '/aml-compliance/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay-2/',
    '/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay/':
      '/aml-compliance/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay-2/',
  },
});
