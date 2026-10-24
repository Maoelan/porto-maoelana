# Maulana Muhammad / Portfolio

A colorful Magma Mist portfolio built with SvelteKit 2, Svelte 5, TypeScript and Tailwind CSS 4. Content and routes follow the 2026 owner PRD and latest follow-up, with the Taste Skill design direction. Includes semantic icons, a pausable tech-stack marquee, reduced-motion support and a single personal portrait on About.

## Run

```sh
npm install
npm run dev
```

## Verify

```sh
npm run check
npm test
npm run build
npm run test:e2e
```

Playwright requires its Chromium browser (`npx playwright install chromium`) if it is not already installed. Production preview runs on port 4173 using `npm run preview`.

## Structure

- `src/lib/content/`: typed identity, 12 projects, 12 roles, skill groups and image mappings.
- `src/lib/components/`: navigation, product frames, workflow graphics, theme switch and shared metadata.
- `src/routes/`: home, project index/details, About, Contact, error handling and sitemap.
- `static/images/`: reviewed public captures, clearly labeled synthetic product plates, portrait and illustrative desk image.
- `DESIGN.md`: design decisions and tokens.
- `QA.md`: validation, critique, provenance and remaining limits.
- `docs/maulana_portfolio_redesign_prd_2026.pdf`: original private PRD, preserved and excluded from the public output.

## Update content

Edit the typed registries, then run the checks above. Internal projects must never gain public repository/demo links without an explicit owner decision. The three featured projects and in-progress statuses are checked in unit tests. Every new project needs a unique slug and complete case-study copy.

## Images

`node scripts/prepare-showcases.mjs` captures anonymous public entry screens and renders a synthetic staff-reporting plate. `node scripts/render-product-plates.mjs` renders synthetic POS and legal-assistant showcase plates. `node scripts/generate-og.mjs` generates the social preview. These scripts use the locally installed Google Chrome through Puppeteer and never sign in, submit data, or invoke private operational tools.

The desk image was generated using the built-in image tool. Full provenance is documented in QA.md. Source ZIPs are intentionally outside the repository and are not required at runtime.

## Deployment

Connect this SvelteKit repository to Vercel. The existing adapter-auto detects Vercel during its build. Build command: `npm run build`. Keep the canonical domain `https://maoelan.vercel.app` or update identity.ts, robots.txt and sitemap metadata together. No runtime environment variables are required. This task does not publish or replace the production deployment.
