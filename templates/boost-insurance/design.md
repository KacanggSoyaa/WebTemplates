# Boost Insurance — Dark Insurtech Landing Page

## Overview
- Purpose: Marketing landing page for an embedded-insurance infrastructure platform
- Target audience: Platforms, fintechs, and product teams that want to offer insurance
- Vibe / mood: Abyssal mission control — deep teal canvas, glass cards, bioluminescent lime accents

## Tech Stack
- Framework / approach: Astro 5 (static, zero JS by default) + Tailwind CSS v4
- Styling: Tailwind v4 `@theme` tokens (from `Boostinsurance/theme.css`), CSS custom classes for gradient / glass / topo / underline
- Preview / dev command: `npm run dev`
- Build output folder: `dist/`

## Pages
- `/` — Nav, Hero, Stats/Logos, Products, Developers (API), Solutions (compliance), Resources, CTA, Footer

## Brand
- Canvas: Abyss Teal `#002025`
- Surfaces: Deep Kelp `#05333a` → Slate Reef `#244348` → Tidewater `#455c60`
- Text: Bone `#fffffa`; muted: Storm Glass `#7d8f92` / Sea Mist `#9eaeb0`
- Accent: Lime Voltage `#79fa4b`; gradient: `linear-gradient(100.7deg, #30d7f1, #79fa4b)`
- Font: Gellix 300/400/500 (substitute: DM Sans)

## Sections & Content
### Nav
- Logo (layers icon + "boost"), 5 links with chevrons, ghost "Contact Us"

### Hero
- Eyebrow: Insurance infrastructure
- Headline: Insurance infrastructure for the modern world (underline "modern world")
- Body + gradient pill CTA + inline secondary link
- Floating glass product card: category tags + active product card + solar gradient button

### Stats / Customers (`#customers`)
- "$100+ Billion of protection" sentence + 2×5 faded partner logo grid + gradient hairline

### Products (`#products`)
- Eyebrow, headline "Products built for the modern world." + tilted isometric card grid

### Developers (`#developers`)
- "One API for every line of coverage." + code mock card

### Solutions (`#solutions`)
- "Licensing, capital, and carriers — handled." + compliance checklist card (reversed)

### Resources (`#resources`)
- Editorial list of docs / blog / help center

### CTA (`#contact`)
- "Ready to launch insurance?" + gradient pill + ghost button

## Layout & Responsive
- Max-width 1200px, generous 96–136px section gaps, asymmetric two-up splits (no 3-col card grids)
- Mobile: single column, nav collapses to a toggle menu

## Acceptance Criteria
- [x] Matches Boost tokens (colors, type scale, radii, gradients)
- [x] Whisper-weight display type with lime underline accent
- [x] Glassmorphism, surface-tier depth, no photography
- [x] One gradient primary CTA per view
- [x] Responsive + reduced-motion aware
- [x] Builds with `npm run build`
