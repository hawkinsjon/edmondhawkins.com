// @ts-check
import { defineConfig } from "astro/config";

// Hosted at the apex domain via GitHub Pages + CNAME, so base is "/".
// If you ever host at username.github.io/edmondhawkins-site instead,
// set base: "/edmondhawkins-site".
export default defineConfig({
  site: "https://edmondhawkins.com",
  base: "/",
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
