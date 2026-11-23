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
slot, served on the custom domain **www.unawa.asia**. There is no `base` path:
the site lives at the domain root, and `unawa-cloud.github.io` redirects to it.

`.github/workflows/deploy.yml` builds on every push to `main` and publishes with
the official `withastro/action`.

First-run checklist:

1. **Settings → Pages → Source** → **GitHub Actions**.
2. **Settings → Pages → Custom domain** → `www.unawa.asia`.
3. DNS: repoint the `www` CNAME at `unawa-cloud.github.io.`. It currently
   resolves to the same host as the apex, so the apex is unaffected.
4. Wait for the certificate to issue, then tick **Enforce HTTPS**.

`public/CNAME` carries the domain so the Pages setting survives every deploy.
Without that file the custom domain is cleared on the next publish.

`Unawa-Cloud` is on the GitHub Free plan, which does not serve Pages from a
private repo, so this repo has to be public. The alternative is upgrading the
organisation to Team.

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

## What is still a placeholder

None of the raster assets could be exported from Figma, so the following are
stand-ins and need replacing before launch:

- **UNAWA shield logomark** — redrawn in `components/BrandMark.astro`.
- **Product marks** (NotarizeIT, SignSecure, UCheck, ForMA) — approximated as
  inline SVG in `components/Icon.astro`.
- **Hero collage photography** — the video feed and participant tiles are `.ph`
  gradient blocks with a silhouette glyph.
- **Partner logos** (KMC, Startup Awards, PH Startup Week, ADB, LES, Investing
  in Women) and the **Supreme Court seal** — rendered as wordmarks in
  `components/TrustStrip.astro` and `components/SiteFooter.astro`.
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
