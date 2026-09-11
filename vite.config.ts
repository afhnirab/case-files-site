import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base + HashRouter so the build works unmodified
// whether it's served from a GitHub Pages project site
// (username.github.io/repo-name/) or a user/org root site.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
