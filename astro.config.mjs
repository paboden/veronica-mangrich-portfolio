// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://paboden.github.io',
	base: '/veronica-mangrich-portfolio',
	publicDir: './public',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		// {
		// 	provider: fontProviders.google(),
        // 	name: "Inter",
        // 	cssVariable: "--font-inter",
        // 	// Optional: specify weights, styles, subsets
        // 	weights: [400, 500, 700],
        // 	styles: ["normal", "italic"],
        // 	subsets: ["latin"],
		// },
		// {
		// 	provider: fontProviders.google(),
        // 	name: "IBM Plex Serif",
        // 	cssVariable: "--font-ibm-plex-serif",
        // 	// Optional: specify weights, styles, subsets
        // 	weights: [100, 200, 300, 400, 500, 600, 700],
        // 	styles: ["normal", "italic"],
        // 	subsets: ["latin"],
		// },
		{
			provider: fontProviders.google(),
        	name: "Lato",
        	cssVariable: "--font-lato",
        	weights: [100, 300, 400, 700, 900],
        	styles: ["normal", "italic"],
		},
		// {
		// 	provider: fontProviders.google(),
        // 	name: "Playfair Display",
        // 	cssVariable: "--font-playfair-display",
        // 	weights: [400, 500, 600, 700, 800, 900],
        // 	styles: ["normal", "italic"],
		// },
		{
			provider: fontProviders.google(),
        	name: "Merriweather",
        	cssVariable: "--font-merriweather",
        	weights: [300, 400, 500, 600, 700, 800, 900],
        	styles: ["normal", "italic"],
		},
	],
});
