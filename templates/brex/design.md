# Brex — Light Fintech Landing Page

## Overview
- Purpose: Marketing landing page for a corporate spend / financial platform
- Target audience: Finance teams at growing and enterprise companies
- Vibe / mood: White concrete, single ember — clinical financial instrument

## Tech Stack
- Framework / approach: Astro 5 (static) + Tailwind CSS v4
- Styling: Tailwind v4 `@theme` tokens (from `WebConcept/Brex/theme.css`)
- Preview / dev command: `npm run dev`
- Build output folder: `dist/`

## Pages
- `/` — Announcement bar, Nav, Hero, Logo band, Features, Resources, CTA, Footer

## Brand
- Canvas: Paper `#ffffff`; section alt: Fog `#f3f3f7`
- Text: Ink `#000000`; secondary: Graphite `#60646c`
- Accent: Ember `#ff5900` (single accent, CTAs only)
- Dark frames: Carbon `#15191e` (announcement), Abyss `#000710` (footer)
- Font: Inter 400/500/600 (+ Flecha display, substitute Inter)

## Sections & Content
### Announcement bar
- Dark carbon bar with centered message + ember link

### Nav
- Brex wordmark, nav items with carets, Sign in / See a demo / Get started (ember)

### Hero
- 72px headline, subtext, email capture + ember button, ghost link
- Product visual (angled card stack) on right

### Logo band (`#customers`)
- Fog section, "Trusted by 35,000+ top companies", 6-col monochrome logos

### Features (`#features`)
- "The card is just the start" — 5 category cards

### Resources (`#resources`)
- Article cards carousel

### CTA (`#contact`)
- "Get started" ember button + ghost link

### Footer
- Abyss bg, multi-column links

## Layout & Responsive
- Max-width 1200px, 48-80px section gaps, 12px radii everywhere
- Mobile: single column, nav collapses

## Acceptance Criteria
- [ ] Matches Brex tokens (colors, type, radii, spacing)
- [ ] Single ember accent, no shadows on cards
- [ ] Inter negative tracking throughout
- [ ] Responsive + reduced-motion aware
- [ ] Builds with `npm run build`
