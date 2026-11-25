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
    '/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay':
      '/aml-compliance/how-to-register-your-pawnshop-with-the-amlc-and-why-you-cant-afford-to-delay-2/',

    // The old author archives. These were WordPress accounts, not bylines
    // anyone would look for, so they go to the homepage rather than anywhere
    // pretending to be an author page.
    '/author/drewpasaporte': '/',
    '/author/it-odoounawa-asia': '/',
    '/author/msandico': '/',

    // Pages the old site served that have no equivalent here.
    // /products/ was an empty page on the default template; the real product
    // content is a section of the homepage.
    '/products': '/#products',
    // WordPress's demo page, which should never have been indexed.
    '/sample-page': '/',
    // An empty page on a signin.php template. The actual sign-in is the app.
    '/sign-in': 'https://app.notarizeit.ph/sign-in',
    // A MailPoet signup form for a CPPI townhall attendance certificate. The
    // form cannot come across, so this holds the URL rather than 404ing it.
    '/cppi-attendance-certificate': '/',
  },
});
