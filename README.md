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

Already wired up. Every push to `main` runs `.github/workflows/deploy.yml`
(Pages **Source: GitHub Actions**) and publishes to:

> **https://hawkinsjon.github.io/edmondhawkins.com/**

### Moving to the real domain (and killing the WordPress box)

The site is base-aware, so switching to `edmondhawkins.com` is a 3-step flip:

1. **`astro.config.mjs`** — set `site: "https://edmondhawkins.com"` and `base: "/"`.
2. **Add `public/CNAME`** containing `edmondhawkins.com` (the value is saved in `CNAME.example`).
3. **DNS** — the domain currently lives on Cloudflare in front of DigitalOcean. Point it at GitHub Pages:
   - Apex `edmondhawkins.com` → four `A` records: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (and/or `AAAA` to the `2606:50c0:8000–8003::153` set).
   - `www` → `CNAME` to `hawkinsjon.github.io`.
   - In Cloudflare set those DNS records to **DNS-only (grey cloud)** to start, so GitHub can issue the
     TLS cert; you can re-enable proxying afterward.
   - In repo **Settings → Pages → Custom domain**, enter `edmondhawkins.com` and enable **Enforce HTTPS**.

Once it resolves, the DigitalOcean WordPress droplet can be powered off.

## Stack

- Astro 5 (zero-JS by default; ships a few KB of vanilla JS for the filter, lightbox and menu)
- Hand-written modern CSS (no framework) — design tokens, container-friendly grids, reduced-motion support
- Click-to-play video lightbox (no heavy embeds until you press play)
