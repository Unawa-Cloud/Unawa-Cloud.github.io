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
| `brand/unawa.svg` | the same file, `fill="white"` swapped for `#111143` |
| `brand/signsecure.png`, `ucheck.png`, `forma.png` | `unawa-marketing/public/images/products/logos/` |
| `badges/dpo.png`, `supreme-court.png`, `ssl.png` | `notarizeit-frontend-v2/public/images/accredited-*.png` |

The NotarizeIT and UNAWA files are true vector and already use `#111143` and
`#FFA000`. The three product lockups are not: each is a high-resolution PNG
(about 3000-4000px wide) that was base64-embedded inside an SVG declaring an
18px canvas, so they were extracted to plain PNG. They are sharp at the sizes
used here but will not scale like vector.

Two things to settle with design:

- The product marks are coloured blue, green and teal, while the frame appears
  to draw them in tangerine alongside NotarizeIT. Whichever is current, these
  are the only real marks that exist in any repo.
- `badges/dpo.png` reads **VALIDITY PERIOD 06 November 2025** and may have
  lapsed.

## What is still a placeholder

- **Partner logos** (KMC, Startup Awards 2025, PH Startup Week, ADB, LES,
  Investing in Women) — wordmarks in `components/TrustStrip.astro`. No artwork
  for these exists in any repo; `unawa-marketing/public/images/partners/` holds
  249-byte files whose only content is the text "Partner 1".
- **Hero collage photography** — the video feed and participant tiles are `.ph`
  gradient blocks with a silhouette glyph. The only hero art on disk is
  `unawa-marketing/public/images/hero/notarizeit-hero-kv.png`, which is the
  older purple NotarizeIT key visual and does not fit this palette.
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
