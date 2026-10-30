# Ramp — React + Vite

A React build of the Ramp landing page, styled with the design tokens from
`/Ramp` (colors, typography, spacing, component rules). Built with Vite and CSS
Modules. No UI library.

## Run it

From this folder (`templates/Ramp-React`):

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  main.jsx                    # React root
  App.jsx                     # page composition
  styles/
    tokens.css                # design tokens (from /Ramp/variables.css)
    global.css                # reset + base styles
  components/
    AnnouncementBar.jsx       + .module.css
    Navbar.jsx                + .module.css
    Hero.jsx                  + .module.css
    Ticker.jsx                + .module.css
    Logos.jsx                 + .module.css
    Features.jsx               + .module.css   (#features · Products)
    Solutions.jsx              + .module.css   (#solutions)
    Partners.jsx               + .module.css   (#partners)
    Testimonials.jsx           + .module.css   (#testimonials · Customers)
    Pricing.jsx                + .module.css   (#pricing)
    Resources.jsx              + .module.css   (#resources)
    Footer.jsx                 + .module.css
```

Each component owns a scoped `*.module.css` file and consumes the shared tokens
from `styles/tokens.css`.

## Customizing

- **Colors / type / spacing:** edit `src/styles/tokens.css`. Reference values
  live in `/Ramp/DESIGN.md`.
- **Section content:** each section is a component in `src/components/`; edit
  the data arrays at the top of the file (e.g. `PLANS`, `TESTIMONIALS`).
- **Page order:** edit `src/App.jsx`.

## Style rules to keep

- Single weight 400 only — no bold; hierarchy comes from size and tracking.
- Highlighter Yellow `#e4f222` only for primary actions, live counters, and
  active states.
- Use 1px hairline borders instead of shadows.
- Radii: 6px buttons/tags, 10px inputs, 12px wash, 16px cards.
- Left-align content inside the 1200px container.

## Notes

- The `lausanne` font isn't bundled; `index.html` loads Inter as the documented
  substitute and `tokens.css` falls back to system fonts.
- Copy is placeholder demo content.
- `src/App.css` and `src/index.css` are leftover Vite starter files and are not
  imported.
