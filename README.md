# Case Files — Tin Goyenda Index

A fan-made browsing index: Home → series → volumes (ascending) → 3 parts per
volume → a short case-file page per part, with a personal star rating.

## Run locally

```
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and choose **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds and publishes
   automatically. No repo-name configuration needed (uses a relative base
   path + hash-based routing, so it works at any GitHub Pages URL).

## Adding content

All data lives in `src/data/books.ts` — one object per book, with an
ordered list of volumes, each with 3 `stories` (parts). Add more volumes by
copying the existing shape.

- `synopsis` / `teaser`: keep these to a short, non-spoiler premise —
  written by you, in your own words, stopping before the mystery resolves.
  Do not paste in text transcribed or OCR'd from the original books; that
  content is copyrighted.
- `coverImage`: optional path under `public/covers/...`. Until you add
  real art, cards fall back to a plain text placeholder (see
  `src/components/Cover.tsx`) — the component crops/resizes any image you
  add to a consistent 3:4 box, so mixed source sizes will look uniform.

## Notes

- Ratings are stored in the visitor's own browser (`localStorage`), so
  they're personal/local, not shared or synced anywhere.
- Routing uses `HashRouter` (URLs look like `#/tin-goyenda/volume-1`) so
  deep links don't 404 on GitHub Pages' static hosting.
