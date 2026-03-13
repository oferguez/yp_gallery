# Artist Portfolio Starter (Astro)

Production-minded static starter for a contemporary painter portfolio.

## Stack

- Astro + TypeScript
- Tailwind CSS (with custom CSS token system)
- Astro content collections for painting data
- Static output (easy Cloudflare Pages deploy)

## Run locally

Requires Node `22.12+`.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Edit points

- Theme values and tokens: `src/styles/global.css`
- Default active theme: `src/config/site.ts` (`defaultTheme`)
- Theme switcher options: `src/config/site.ts` (`themeOptions`)
- Rooms and connectivity map: `src/config/site.ts` (`rooms`)
- Artist name + intro text + nav items: `src/config/site.ts`
- Painting content entries: `src/content/paintings/*.md`
- Homepage composition: `src/pages/index.astro`
- Browse map + room pages: `src/pages/browse/`

## Content model

Each painting entry includes:

- `title`
- `slug`
- `year`
- `medium`
- `dimensions`
- `series`
- `room`
- `description`
- `featured`
- `order`
- `coverImage`
- `coverAlt`
- optional `galleryImages`

Schema is defined in `src/content.config.ts`.

## Project structure

```text
src/
  components/
  config/
  content/paintings/
  layouts/
  lib/
  pages/
  styles/
```

## Cloudflare Pages deployment

This project is static by default (`output: "static"`), so Cloudflare Pages setup is straightforward:

1. Push repo to GitHub/GitLab.
2. In Cloudflare Pages, create a new project from that repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Environment: Node `22.x`

No Astro adapter is required for static hosting.
 
