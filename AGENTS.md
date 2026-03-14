# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro static site for an artist portfolio. Primary source files live in `src/`: reusable UI in `src/components/`, page routes in `src/pages/`, shared layout shells in `src/layouts/`, configuration in `src/config/`, helper utilities in `src/lib/`, and global styling in `src/styles/`. Painting entries are content files under `src/content/paintings/`, with the schema defined in `src/content.config.ts`. Public assets belong in `public/`. Build output is generated into `dist/` and should not be edited manually.

## Build, Test, and Development Commands
Use Node `22.12+` as declared in `package.json`.

- `npm install`: install dependencies.
- `npm run dev`: start the local Astro dev server.
- `npm run build`: create the production static build in `dist/`.
- `npm run preview`: serve the built site locally for a final check.
- `npm run astro -- check`: run Astro's project checks when touching routes, content, or types.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript and Astro files use semicolons, single quotes, and two-space indentation in markup/CSS blocks. Keep components and layouts in PascalCase (`PaintingCard.astro`, `BaseLayout.astro`). Use camelCase for variables and exported config objects, and kebab-case for content slugs, theme names, and route segments such as `light-gallery` or `src/pages/browse/`. Prefer small configuration-driven updates in `src/config/site.ts` and `src/content/paintings/*.md` over hard-coded page changes.

## Testing Guidelines
There is no dedicated automated test suite in the repository yet. Treat `npm run build` and `npm run astro -- check` as the minimum validation for every change. When editing content collections, confirm the generated pages render locally in `npm run dev`. For UI changes, verify both desktop and mobile layouts before opening a PR.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `Update site.ts` and `map on mobile`. Keep commit messages concise, present tense, and focused on one change. Pull requests should include a brief description, note any affected routes or content collections, link related issues when applicable, and attach screenshots for visible UI changes. If the change affects deployment, mention that GitHub Pages is published from the `Publish` branch via `.github/workflows/deploy-pages.yml`.
