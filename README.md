# US-Squared Research Institute — Website

Public website for **US-Squared Research Institute** (us-squared.org), built on the ecosystem **Illuminated Field Journal** design system (US-Squared pair: Meridian ground `#131A2B`, Brass signal `#A8874F`).

**EIN 92-3221304 · 501(c)(3) Nonprofit**

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations, load sequences)
- **Deployed via Vercel**

## Pages

| Route | Page |
|---|---|
| `/` | Home — master brand hub + all program sections |
| `/baseops` | BASEops — operations system |
| `/atlas` | Atlas Academy — youth learning pathway |
| `/earth` | Altered.Earth — land-based retreat |
| `/sparent` | Sparent Science — newsletter for trusted adults |
| `/research` | Research & Impact |
| `/about` | About the organization |
| `/connect` | Contact, partnerships, donate |

## Brand System

Illuminated Field Journal — the ecosystem chassis shared with Atlas Academy.
Golden Vanguard and Signal Fire are retired; none of their colors or typefaces
may appear in this repo (`grep -rnE "D4A017|Bebas|Barlow" app components` must
return nothing).

- `app/tokens.css` is a byte-identical copy of the canonical file in
  `eltphd/atlas-academy` at `brand/tokens.css`. Do not edit it here; update the
  canonical file, bump its version, and re-copy.
- `app/globals.css` holds every class the pages use. Pages use classes and CSS
  variables only — no raw hex, no inline font families.
- Fonts (Newsreader, Archivo, IBM Plex Mono) are self-hosted through
  `next/font` in `app/layout.tsx` with `font-display: swap`.
- `<html data-venture="ussq">` sets the institute pair. Sub-brand routes wrap
  their page in `<Venture venture="atlas|fu|press|sparent">` to carry their own
  ground/signal while the chassis holds.
- Contrast for every pairing is checked by `node scripts/contrast.mjs`
  (WCAG 2.1 AA); run it after any token change.
- No green/amber/red status ramps. Health or trend uses `<Meter>` (single-hue
  signal gradient) with an arrow or label for direction.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Connected to Vercel. Push to `main` to deploy.

```bash
npm run build   # production build
```

## Content Updates

Photo zones are marked with `PhotoPlaceholder` components — replace with real images when available. Form submissions currently show in-page confirmation; wire to a backend/email service (Resend, Formspree, etc.) when ready.
