import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import cloudinary from 'rehype-local-image-to-cloudinary';
// import path from 'path'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://prince.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: sharpImageService()
  }
});