# Manna — Web

Marketing site for the Manna Bible app. Deployable to Vercel with zero config.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (scroll-reveal animations)
- lottie-web (hero splash animation)
- DM Sans (self-hosted)

## Develop

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

```bash
vercel
```

Set your domain on Vercel (or use the default `*.vercel.app`).

## Pages

- `/` — landing (hero, story, features, coming soon, CTA, footer)
- `/privacy` — Privacy Policy (Solana dApp Store compliant)
- `/terms` — Terms of Use
- `/license` — App license + OSS attributions
- `/copyright` — Scripture translation attributions
- `/download` — 302 redirect to the Solana dApp Store

## Updating the dApp Store URL

Edit `lib/constants.ts` and change `DAPP_STORE_URL` once the listing is live.

## Updating legal text

All four legal pages are plain TSX in `src/app/{privacy,terms,license,copyright}/page.tsx`. They share the same `components/LegalLayout.tsx` chrome.
