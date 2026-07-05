# mert574.dev

Personal site + blog. Static [Astro](https://astro.build) site, built by a
self-hosted runner and served out of [Garage](https://garagehq.deuxfleurs.fr/)
object storage on my homelab. Infra lives in
[homelab-core](https://github.com/mert574/homelab-core).

## Stack

- **Astro 5** — static output, zero JS by default
- **MDX** — Markdown posts with components when needed
- **Expressive Code** — build-time syntax highlighting
- **Pagefind** — client-side full-text search (no server)
- **RSS** at `/rss.xml`, sitemap, OG tags
- Editorial theme: Fraunces + Newsreader + JetBrains Mono, self-hosted fonts

## Local dev

```sh
nvm use          # node from .nvmrc
npm install
npm run dev      # http://localhost:4321
```

Search only works after a real build (Pagefind indexes `dist/`):

```sh
npm run build && npm run preview
```

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/blog/`. Frontmatter:

```yaml
---
title: Post title
description: One line for listings, OG, and RSS.
date: 2026-07-05
tags: [infra, astro]
cover: ./cover.svg      # optional, co-located, goes through the image pipeline
coverAlt: Alt text
draft: false            # true hides it from build
---
```

The file name is the slug: `my-post.mdx` → `/blog/my-post`.

## Deploy

Push to `main`. The `deploy` workflow (`runs-on: homelab-blog`) builds and
`aws s3 sync`s `dist/` to the `mert574.dev` bucket on Garage. Requires repo
secrets `BLOG_S3_ACCESS_KEY` / `BLOG_S3_SECRET_KEY` (the Garage `blog` key).

Edit site details (name, nav, socials, projects) in `src/consts.ts`.
