# Boost Insurance — Astro + Tailwind CSS v4

A dark, abyssal insurtech landing page built from the `WebConcept/Boostinsurance/` design tokens.

## Stack

- [Astro 5](https://astro.build) — static output, zero client JS except the nav and scroll-reveal scripts
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` — tokens declared with `@theme` in `src/styles/global.css`
- DM Sans (Google Fonts) as the substitute for Gellix

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the built site
```

## Structure

```
src/
├── layouts/Layout.astro        # head, fonts, skip link, reveal observer
├── pages/index.astro           # page composition
├── styles/global.css           # @theme tokens + base/components/utilities
└── components/
    ├── Icon.astro              # inline stroke icon set
    ├── Nav.astro               # sticky glass nav + mobile toggle
    ├── Hero.astro              # display headline + floating glass product card
    ├── StatsBand.astro         # #customers — $100B stat + partner wordmarks
    ├── Products.astro          # #products — tilted isometric product cards
    ├── Developers.astro        # #developers — API code card
    ├── Solutions.astro         # #solutions — compliance checklist (reversed split)
    ├── Resources.astro         # #resources — editorial link list
    ├── CtaBand.astro           # #contact — gradient CTA panel
    └── Footer.astro            # link columns + legal
```

## Design notes

- One gradient primary CTA per view (`.gradient-cta`); the hero product card uses `.gradient-solar`.
- `.glass` supplies the backdrop-blur surface used by the nav and floating cards.
- `.topo` paints the faint topographic grid, masked to fade out down the page.
- `.accent-underline` draws the 3px lime underline on one phrase per headline.
- `--spacing-*` tokens from `WebConcept/Boostinsurance/theme.css` are intentionally **not** imported — they would override Tailwind's default spacing scale. Use Tailwind's scale or arbitrary values.
- Motion is opt-out: `.reveal-init` / `.is-visible` collapse under `prefers-reduced-motion: reduce`.

## Design source

`../../WebConcept/Boostinsurance/DESIGN.md`, `theme.css`, `variables.css`, `tokens.json` — style reference only; the page content lives in `design.md`.
