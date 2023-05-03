import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
// import cloudinary from 'rehype-local-image-to-cloudinary';
// import path from 'path'

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
		
	},
	site: 'https://prince.dev',
	integrations: [mdx(), sitemap(),],
});
