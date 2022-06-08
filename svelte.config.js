import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'

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
				'script-src': [ 'self' ],
				'img-src': [ 'self' ]
			}
		}
	}
}

export default config