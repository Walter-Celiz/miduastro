import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  // para cambiar la config de ssr o ssg o ambas (hybrid)
  output: 'server',
  // adapter para node
  adapter: vercel(),
});