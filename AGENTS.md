# Website Template Workspace

This workspace holds many website templates. Each template lives in its own
folder under `templates/`, and every template is driven by a `design.md` file.

## The workflow

1. A template folder contains a `design.md` describing the site to build.
2. To create the site: read `templates/<name>/design.md` and build the website
   **inside that same folder**.
3. Build with the tech stack named in `design.md` — templates may each use a
   different stack (plain HTML/CSS/JS, React, Next.js, Astro, Vue, Tailwind, etc.).
4. If `design.md` does not name a stack, use plain HTML/CSS/JS and say so.

## Rules

- Never modify a template's `design.md` unless explicitly asked.
- Keep each template self-contained: assets, build output, and dependencies all
  live inside that template folder.
- Do not add a shared root-level build system; templates are independent.
- After building, confirm the site previews and tell the user the exact command
  to run (e.g. `npx serve templates/<name>` or `npm run dev`).

## Creating a new template

1. Copy `templates/_template/design.md` to `templates/<new-name>/design.md`.
2. Fill in the spec (stack, pages, brand, content, acceptance criteria).
3. Ask the agent to build it.
