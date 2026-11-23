# unawa-web-2026

Astro build of the UNAWA corporate landing page, copied from Figma
`Redesign 2026` → page `Website 2026` → frame **UNAWA - B2B**
([node 4879-47455](https://www.figma.com/design/k3z47p13SB1rae68A7cbuB/Redesign-2026?node-id=4879-47455)).

Static output, deployed to GitHub Pages by GitHub Actions.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # static output in dist/
npm run preview  # serve the built output
```

## Deployment

The repo is `Unawa-Cloud/Unawa-Cloud.github.io`, GitHub's organisation-site
slot. `.github/workflows/deploy.yml` builds on every push to `main` and
publishes with the official `withastro/action`. The Pages source is set to
**GitHub Actions**.

The repo is public because `Unawa-Cloud` is on the GitHub Free plan, which does
not serve Pages from private repos. Making it private again takes the site down
unless the organisation moves to Team or above.

### Current state: preview on github.io

The site serves at **https://unawa-cloud.github.io/** while the redesign is
reviewed. There is no `base` path, and `public/CNAME` is deliberately absent: if
that file ships, GitHub attaches the custom domain on the next deploy and the
github.io URL stops serving directly.

`astro.config.mjs` still points `site` at the final domain, so canonical and
Open Graph URLs name `www.unawa.asia` rather than the preview address. That also
stops search engines treating the preview URL as the canonical one.

### Going live on www.unawa.asia

1. Recreate `public/CNAME` with one line: `www.unawa.asia`
2. Repoint the `www` CNAME record at `unawa-cloud.github.io.`. It currently
   resolves to the same host as the apex, so the apex is unaffected.
3. Push. The deploy attaches the custom domain from the CNAME file.
4. Once the certificate issues, tick **Enforce HTTPS** in **Settings → Pages**.

An organisation site's custom domain is inherited by every other Pages repo in
the org, so a later repo publishes at `www.unawa.asia/<repo>` with no extra DNS.

`compressHTML: true` is set deliberately. Astro 7 changed the default to
`'jsx'`, which strips whitespace between adjacent inline elements and would
close up gaps like `business forward` in the hero headline.

## Structure

```
src/
  data/content.ts        every string on the page, transcribed from Figma
  styles/global.css      brand tokens, type scale, buttons, layout helpers
  layouts/Base.astro     document shell, metadata, Inter via Google Fonts
  components/            one component per Figma section, in page order
  pages/index.astro      composes the sections
```

Section order matches the frame: nav, hero, credibility strip, products,
why-trust, approach, team CTA, support, resources, footer.

## Design tokens

Colour names mirror the Figma colour styles, and the hex values are the ones
already in use in `notarizeit-marketing-v2/app/globals.css`:

| Token | Hex | Figma style |
| --- | --- | --- |
| `--midnight` | `#111143` | UNAWA Midnight |
| `--blue` | `#223381` | UNAWA Blue |
| `--malaya` | `#5c88fb` | Malaya Blue |
| `--tahimik` | `#9bacd8` | secondary text on dark |
| `--tangerine` | `#ff9f00` | UNAWA Tangerine |
| `--peach` | `#ffede3` | Malumanay Orange |
| `--malumanay` | `#eef4fc` | Malumanay Blue |
| `--paper` | `#f8fafe` | page ground |

Type is Inter throughout. The scale in `global.css` maps to the named Figma
text styles: Display Header 1 (70/70), Display Header 2 (50/120),
Header (32/130), Subheader (25/140), Body Display (20/30), Body (16/22),
Button Text (16/16), Eyebrow (12), Footnote (11/150).

## Assets

Real artwork lives in `public/brand/` and `public/badges/`. None of it came from
Figma; it was taken from repos already on the team's machines:

| File | Source |
| --- | --- |
| `brand/notarizeit.svg`, `brand/notarizeit-white.svg` | `notarizeit-frontend-v2/public/images/` |
| `brand/unawa-white.svg` | `notarizeit-frontend-v2/public/images/unawa-white.svg` |
| `brand/unawa.svg` | the same file, recoloured: shield `#FFA000`, wordmark `#111143` |
| `brand/signsecure-mark.png`, `ucheck-mark.png`, `forma-mark.png` | `unawa-marketing/public/images/products/logos/`, cropped and recoloured |
| `badges/dpo.png`, `supreme-court.png`, `ssl.png` | `notarizeit-frontend-v2/public/images/accredited-*.png` |
| `hero/notary.jpg`, `participant-1.jpg`, `participant-2.jpg` | exported from the frame at 2x, converted to JPEG |

The NotarizeIT and UNAWA files are true vector and already use `#111143` and
`#FFA000`.

The three product marks needed work. Inspecting the frame, each is a vector
path filled `#FFA000` (confirmed on the UCheck node, `4894-1662`), and the
product name beside it is ordinary Inter, not part of a logo lockup. The only
artwork on disk was in `unawa-marketing`, where the same shapes are coloured
blue, green and teal from an earlier brand, and each was a high-resolution PNG
base64-embedded inside an SVG declaring an 18px canvas. So each was extracted,
cropped to the glyph alone, and recoloured to `#FFA000`. The shapes are the
real ones; only the hue was changed. Replace them with proper exports when
design can provide them.

`--tangerine` is `#ffa000` to match the frame exactly.

`unawa.svg` started as the white-on-dark lockup, the only UNAWA vector that
shipped anywhere. Recolouring every path to `#111143` turned the shield navy
too, which the frame does not do. The nine paths were split by bounding box:
the three at x 0-49.8 of the 184-wide viewBox are the shield and take
`#FFA000`, the six from x 65.4 rightward are the UNAWA wordmark and the
trademark glyph, and take `#111143`.

The three hero photographs were exported from the frame at 2x PNG and
converted to JPEG with `sips`, which took them from 586KB to 87KB with no
visible difference. `notary.jpg` is 862x410, wider than the 16:10 tile it
sits in, so it is `object-fit: cover`. The two participant tiles are only
166x134, barely above their display size, so they are soft on a retina
screen; re-export those at 4x if it shows.

One thing to settle with design: `badges/dpo.png` reads
**VALIDITY PERIOD 06 November 2025** and may have lapsed.

## What is still a placeholder

- **Partner logos** (KMC, Startup Awards 2025, PH Startup Week, ADB, LES,
  Investing in Women) — wordmarks in `components/TrustStrip.astro`. No artwork
  for these exists in any repo; `unawa-marketing/public/images/partners/` holds
  249-byte files whose only content is the text "Partner 1".
- **Resource card thumbnails** — grey blocks, matching the placeholder state the
  Figma frame itself is in.

## What has no backend

GitHub Pages serves static files only. Both forms render as designed but their
submit handlers call `preventDefault()` and show a short notice:

- the support ticket form in `components/Support.astro`
- the newsletter form in `components/SiteFooter.astro`

Point them at a form endpoint (Formspree, a Worker, the UNAWA API) before
launch. All nav and CTA links are in-page anchors; real destinations are not
decided in the frame.

## Known deviations from the frame

- The frame is 1440 wide with its sections drawn at 1616 and clipped. This build
  uses a 1200px content column centred in a 1280px container, which matches the
  frame's visible content inset.
- Below 560px the hero's folder card is hidden; the three collage cards cannot
  clear each other at that width.
- The footer in the frame carries the NotarizeIT | UNAWA lockup rather than
  UNAWA alone. Reproduced as drawn — worth confirming with design.
