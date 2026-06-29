// @ts-check
import { defineConfig } from "astro/config";

// ── Hosting ────────────────────────────────────────────────────────────────
// CURRENT: GitHub Pages project page → https://hawkinsjon.github.io/edmondhawkins.com/
//
// TO MOVE TO THE CUSTOM DOMAIN (edmondhawkins.com) and retire WordPress:
//   1. set  site: "https://edmondhawkins.com"  and  base: "/"  below
//   2. recreate  public/CNAME  containing:  edmondhawkins.com
//   3. point DNS at GitHub Pages (see README) + set the custom domain in repo Settings → Pages
// All asset paths use import.meta.env.BASE_URL, so they work under either base.
export default defineConfig({
  site: "https://hawkinsjon.github.io",
  base: "/edmondhawkins.com",
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
