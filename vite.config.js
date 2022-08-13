import { sveltekit } from '@sveltejs/kit/vite'
import GlobPlugin from 'vite-plugin-glob'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [ sveltekit(), GlobPlugin() ],
}

export default config