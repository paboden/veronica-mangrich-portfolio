// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://paboden.github.io',
	base: '/veronica-mangrich-portfolio',
	publicDir: './public',
	integrations: [mdx(),],
   	devToolbar: {
    	enabled: false
   	},
	fonts: [
		{
			provider: fontProviders.google(),
        	name: "Lato",
        	cssVariable: "--font-lato",
        	weights: [100, 300, 400, 700, 900],
        	styles: ["normal", "italic"],
		},
		{
			provider: fontProviders.google(),
        	name: "Merriweather",
        	cssVariable: "--font-merriweather",
        	weights: [300, 400, 500, 600, 700, 800, 900],
        	styles: ["normal", "italic"],
		},
	],
});
