# US-Squared Research Institute — Website

Public website for **US-Squared Research Institute** (us-squared.org), implementing the **Signal Fire Brand System v1.0**.

**EIN 92-3221304 · 501(c)(3) Nonprofit**

## Stack

- **Next.js 15** (App Router, static export)
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

Signal Fire Brand System v1.0. Fonts via Google Fonts (free, OFL):
- **Bebas Neue** — Display/Headlines
- **Barlow Condensed** — Labels, eyebrows, sub-heads
- **IBM Plex Sans** — Body copy, UI
- **IBM Plex Mono** — Data, stats, HEX codes

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
