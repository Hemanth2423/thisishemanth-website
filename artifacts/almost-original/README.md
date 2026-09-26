# Almost Original

A quiet, static personal site built with Astro, Tailwind CSS v4 and TypeScript. It ships no client JavaScript apart from a tiny inline script that picks a background theme from the visitor's local time.

## Scripts
- `pnpm dev` runs the dev server on `$PORT` (host `0.0.0.0`) with base `$BASE_PATH`
- `pnpm build` writes the static site to `dist/public`
- `pnpm typecheck` runs `astro check`

## Adding writing
Put a Markdown file in `src/content/work/` (projects) or `src/content/scribbles/` (poems and notes). The file name becomes the URL, so `river-notes.md` is served at `/scribbles/river-notes/`.

```md
---
title: "River notes"
date: 2025-06-01
description: "One sentence used on listings and for SEO."
hero: ./images/river.jpg   # optional, path relative to the file
heroAlt: "Morning fog over a river"  # optional
---
Your text here.
```

The two `example-*.md` files are placeholder content. Delete them when you add your own.

## Theme hours
The four backgrounds (dawn, day, sunset, night) are chosen by local hour. Change the start hours in `src/config.ts` under `themeHours`. Without JavaScript, the site uses the day theme. Colours for each theme are in `src/styles/global.css`.

## LinkedIn
Set `linkedinUrl` in `src/config.ts` to your full profile URL. Until you do, the call to action shows as plain text with a small "LinkedIn link coming soon" note.

## Leaf canvas
`src/components/LeafCanvas.astro` is an empty, full-viewport layer that ignores pointer events. It is there for a future animation.
