import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  build:{
  site: 'https://samdotson1992.github.io/'},
  output: "static",
  base: "astro-cv-esquelete"
});