import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		alias: {
			'!actions': 'src/lib/actions',
			'!components': 'src/lib/components',
			'!css': 'src/lib/css',
			'!types': 'src/lib/types',
			'!utils': 'src/lib/utils',
		},
		trailingSlash: 'always',
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': [ 'self' ],
				'script-src': [ 'self', 'unsafe-inline' ],
			}
		},
		inlineStyleThreshold: 50,
		prerender: { default: true }
	}
}

export default config