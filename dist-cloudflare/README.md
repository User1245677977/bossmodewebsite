# Boss Mode — Cloudflare Pages bundle

Self-contained static site, ready to deploy.

## Deploy (drag & drop)

1. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Upload assets**
2. Name the project (e.g. `bossmode-site`)
3. Drag this entire folder into the upload area
4. Click **Deploy** — you'll get a `*.pages.dev` URL in ~30 seconds

## Custom domain (drinkbossmode.net)

After deploy: **Pages project → Custom domains → Set up a custom domain → enter `drinkbossmode.net`**.
If your DNS is on Cloudflare, it's one click. Otherwise add the CNAME at your registrar.

## What's in here

- `index.html` — entry point. The homepage opens with the Stat Barrage scroll sequence.
- `*.jsx` — React components (Babel-transpiled in the browser; no build step needed)
- `assets/` — can imagery, facet backgrounds, logos
- `fonts/` — Orbitron + Barlow Condensed
- `colors_and_type.css` — design tokens
- `_redirects` — sends all routes to `index.html` so the in-app `#/...` router works

No build step, no Node, no environment variables — just static files.
