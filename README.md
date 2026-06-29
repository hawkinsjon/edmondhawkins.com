# edmondhawkins.com

The portfolio site for **Edmond Hawkins** — Writer · Director · Animator.
A fast, mobile-first static site built with [Astro](https://astro.build), designed to be hosted on **GitHub Pages** (no server, no WordPress).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

## Edit the content

Everything is data-driven — no need to touch markup to update the work:

- **`src/data/work.ts`** — every show, role, network and video. Add a clip by dropping its
  YouTube id (or a Vimeo id with `source: "vimeo"`) into the right show. Mark the strongest
  piece per show with `featured: true`.
- **`src/data/site.ts`** — name, bio, tagline, networks, collaborators, contact email,
  social links, and the contact-form endpoint.
- **`public/img/`** — portrait, on-set stills and the social share image (`og.jpg`).

Video thumbnails are pulled live from YouTube/Vimeo, so you never have to manage images for clips.

## Contact form

The contact form posts to whatever URL is set in `site.contact.formEndpoint`
(`src/data/site.ts`). Create a free form at [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com) and paste the endpoint there. Until then the form is
inert but the `mailto:` links work.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
4. **Custom domain:** `public/CNAME` already points at `edmondhawkins.com`. In your DNS, point
   the apex `A`/`ALIAS` (or a `CNAME` for `www`) at GitHub Pages, then set the custom domain
   under Settings → Pages. Once it's live you can decommission the DigitalOcean WordPress box.

## Stack

- Astro 5 (zero-JS by default; ships a few KB of vanilla JS for the filter, lightbox and menu)
- Hand-written modern CSS (no framework) — design tokens, container-friendly grids, reduced-motion support
- Click-to-play video lightbox (no heavy embeds until you press play)
