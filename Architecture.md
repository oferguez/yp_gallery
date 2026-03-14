# Architecture

## Overview
This repository is a static portfolio site built with Astro, TypeScript, and Tailwind CSS. Its main job is to turn structured painting data into fast HTML pages with minimal JavaScript. The project separates three concerns cleanly:

- content in Markdown files under `src/content/paintings/`
- presentation in Astro components, layouts, and CSS under `src/`
- build output in `dist/`

That separation is why the site is easy to evolve visually without having to rewrite the content model.

## What Astro Is
Astro is a web framework focused on content-heavy sites. Instead of shipping a large client-side app by default, Astro renders pages ahead of time into plain HTML during the build. That matters here because a gallery site mostly displays content, images, and navigation, not complex live application state.

Key Astro concepts used in this repository:

- `.astro` files: component files that combine server-side code at the top and HTML markup below.
- layouts: wrappers used across many pages. Here, [`src/layouts/BaseLayout.astro`](/home/ofer/wsl_repos/yp_gallery/src/layouts/BaseLayout.astro) defines the `<html>`, `<head>`, header, footer, and main content slot.
- pages-based routing: files in `src/pages/` become URLs. For example, `src/pages/about.astro` becomes `/about`.
- dynamic routes: [`src/pages/paintings/[slug].astro`](/home/ofer/wsl_repos/yp_gallery/src/pages/paintings/[slug].astro) generates one page per painting.
- content collections: Astro’s structured content system. [`src/content.config.ts`](/home/ofer/wsl_repos/yp_gallery/src/content.config.ts) validates each painting Markdown file with a schema so bad data fails early.
- slots: placeholders inside components/layouts. In `BaseLayout.astro`, `<slot />` is where each page’s own content is inserted.

## How the App Flows
At build time, Astro reads all painting Markdown files from `src/content/paintings/`. Each file contains frontmatter like title, year, room, images, and slug. The schema in [`src/content.config.ts`](/home/ofer/wsl_repos/yp_gallery/src/content.config.ts) checks that every entry has the required fields.

Pages then pull this data with `getCollection('paintings')`:

- [`src/pages/index.astro`](/home/ofer/wsl_repos/yp_gallery/src/pages/index.astro) selects featured works for the home page.
- [`src/pages/paintings/index.astro`](/home/ofer/wsl_repos/yp_gallery/src/pages/paintings/index.astro) builds the catalogue page and adds client-side filtering.
- [`src/pages/paintings/[slug].astro`](/home/ofer/wsl_repos/yp_gallery/src/pages/paintings/[slug].astro) uses `getStaticPaths()` to generate one detail page per painting.
- [`src/pages/browse/index.astro`](/home/ofer/wsl_repos/yp_gallery/src/pages/browse/index.astro) builds the room map from room definitions in [`src/config/site.ts`](/home/ofer/wsl_repos/yp_gallery/src/config/site.ts).

Shared rendering logic lives in components:

- [`src/components/SiteHeader.astro`](/home/ofer/wsl_repos/yp_gallery/src/components/SiteHeader.astro) renders the nav and active-state logic.
- [`src/components/PaintingCard.astro`](/home/ofer/wsl_repos/yp_gallery/src/components/PaintingCard.astro) renders reusable painting cards.
- [`src/components/ThemeSwitcher.astro`](/home/ofer/wsl_repos/yp_gallery/src/components/ThemeSwitcher.astro) is one of the few browser-interactive pieces and stores the chosen theme in `localStorage`.

## Styling and Themes
The visual system is centralized in [`src/styles/global.css`](/home/ofer/wsl_repos/yp_gallery/src/styles/global.css). It imports Tailwind and defines theme tokens with CSS custom properties such as `--bg`, `--fg`, and `--accent`. Each theme is activated with a `data-theme` attribute on the root `<html>` element.

Theme names and room definitions live in [`src/config/site.ts`](/home/ofer/wsl_repos/yp_gallery/src/config/site.ts). That file acts as the site’s editorial control panel:

- artist name and copy
- nav items
- available themes
- room graph definitions

This makes appearance changes cheap. To add a new theme, you typically only need:

1. a new theme entry in `themeOptions`
2. a matching `[data-theme='...']` block in `global.css`

## Why Astro Fits This Project
Astro is useful here because the site is mostly content and design. That gives several advantages:

- fast pages: most output is static HTML and optimized images, not a heavy client app
- easier redesigns: markup stays simple and styling is centralized
- safer content edits: the content collection schema catches malformed painting entries
- selective JavaScript: interactive pieces like filters and theme switching stay small and isolated

For a portfolio or gallery, this is usually a better fit than a fully client-rendered SPA.

## How to Modify the Look and Feel
If you want to restyle the site, the main touchpoints are:

- [`src/styles/global.css`](/home/ofer/wsl_repos/yp_gallery/src/styles/global.css) for global tokens, layout classes, typography, spacing, and theme definitions
- [`src/layouts/BaseLayout.astro`](/home/ofer/wsl_repos/yp_gallery/src/layouts/BaseLayout.astro) for site-wide HTML structure
- `src/components/*.astro` for reusable section patterns such as cards, headers, and footers
- [`src/config/site.ts`](/home/ofer/wsl_repos/yp_gallery/src/config/site.ts) for theme names, navigation, and room metadata

This structure is friendly to major visual changes because content and styling are not tightly coupled. You can replace the card design, navigation style, typography, spacing system, or room-map treatment without changing the painting content files.

## Importing New Themes or More Modern Designs
There are a few practical ways to bring in new visual systems:

### Option 1: Extend the Existing Token System
This is the lowest-risk path. Keep the current Astro components and add new CSS token sets in `global.css`. This works well for editorial, minimal, luxury, brutalist, or modern-gallery themes.

### Option 2: Replace Component Markup Gradually
If you want a more dramatic redesign, update the Astro components one by one:

- header/navigation
- painting cards
- room nodes and map layout
- footer

Because Astro components are small and mostly presentational, redesign work stays localized.

### Option 3: Introduce a UI Library Selectively
Astro supports React, Vue, Svelte, and others when needed. If you later want highly interactive sections, you can add a framework only for those parts instead of rewriting the whole site. For example, a more animated gallery browser or advanced filtering UI could become a React or Svelte island while the rest remains static Astro.

### Option 4: Import External Design Systems Carefully
You can adopt an external theme, template, or component style system, but the cleanest approach is usually to map it onto:

- the existing CSS tokens
- Astro components in `src/components/`
- the shared page shell in `BaseLayout.astro`

That avoids turning the whole site into a framework migration.

## Practical Mental Model
If you are new to Astro, think of this project as:

- Markdown files are the database.
- `site.ts` is the central configuration file.
- `.astro` files are server-rendered templates.
- `global.css` is the design system.
- tiny inline `<script>` blocks are used only where browser behavior is actually needed.

That model explains most of the codebase.
