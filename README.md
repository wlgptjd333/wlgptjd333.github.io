# byhyesung.com

Hyesung Ji's home hub — projects, posts, and links in one place. Built with Jekyll on GitHub Pages, with DNS on Cloudflare.

## How to update

| To do this | Edit this file |
|---|---|
| Add or edit a project | `_data/projects.yml` (copy the format at the top) |
| Show a project on the home page | Add `featured: true` to it |
| Add a role line or big numbers to a card | `role`, `stats` in `_data/projects.yml` |
| Change the moving pose card on the home page | `_includes/pose-card.html` (colors: `.pc-*` in `assets/css/site.css`) |
| Add a filter category | `_data/categories.yml` |
| Change the intro, links, or "Now" | `_data/profile.yml` |
| Write a post | Add `_posts/YYYY-MM-DD-title.md` |
| Change colors | Tokens at the top of `assets/css/site.css` |

Edit a file on GitHub and commit — the site updates in a minute or two. Works from a phone too.

### Post format

```markdown
---
title: Post title
description: One-line summary (optional)
tags: [Notes]
---

Write the body in Markdown.
```

Put images in `assets/img/` and use `![alt text](/assets/img/file.png)`.
Obsidian `[[wikilinks]]` and `![[embeds]]` need to be turned into normal Markdown links first.

## Addresses

| Address | Served from |
|---|---|
| `byhyesung.com` | This repository |
| `www.byhyesung.com` | Redirects to the above |
| `coinfloat.byhyesung.com` | `coin-float` repository (its own custom domain) |
| `byhyesung.com/<repo>/` | GitHub Pages of any other repository without its own domain |

To give a project its own subdomain: set `name.byhyesung.com` under that repository's Settings → Pages → Custom domain, then add `CNAME name → wlgptjd333.github.io` (DNS only) in Cloudflare.

## Local preview

With Docker Desktop running:

```bash
docker compose up
```

Open http://127.0.0.1:4000. The first run takes a few minutes to install.
