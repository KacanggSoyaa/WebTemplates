# Brex — Astro + Tailwind CSS v4

A light, fintech landing page built from the `WebConcept/Brex/` design tokens.

## Stack

- [Astro 5](https://astro.build) — static output
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- Inter (Google Fonts) for body/UI; Flecha substituted with Inter

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
├── layouts/Layout.astro
├── pages/index.astro
├── styles/global.css          # @theme tokens + base/components/utilities
└── components/
    ├── Icon.astro
    ├── AnnouncementBar.astro
    ├── Nav.astro
    ├── Hero.astro
    ├── LogoBand.astro          # #customers
    ├── Features.astro          # #features
    ├── Resources.astro        # #resources
    ├── CtaBand.astro          # #contact
    └── Footer.astro
```

## Design notes

- Single accent: Ember `#ff5900` used only for primary actions.
- No drop shadows on cards; Paper-on-Fog contrast + 1px Mist borders.
- Inter negative tracking throughout (-0.01 to -0.03em).
- 12px radius on all interactive surfaces; 6px for tags.
- Motion opt-out via `prefers-reduced-motion`.

## Design source

`../../WebConcept/Brex/DESIGN.md`, `theme.css`, `variables.css`, `tokens.json` — style reference only.
