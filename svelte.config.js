import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		prerender: {
			origin: 'https://weilage.dev',
		},
	},

	preprocess: [vitePreprocess({}), mdsvex(mdsvexConfig)],
}

export default config
