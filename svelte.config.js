import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import GlobPlugin from 'vite-plugin-glob'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({  }),

	kit: {
		trailingSlash: 'always',
		adapter: vercel({  }),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': [ 'self' ],
				'script-src': [ 'self', 'unsafe-inline' ],
				'img-src': [ 'self' ]
			}
		},
		vite: {
			plugins: [
				GlobPlugin({  })
			]
		}
	}
}

export default config