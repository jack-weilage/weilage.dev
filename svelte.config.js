import adapter from '@sveltejs/adapter-vercel'

import { mdsvex } from 'mdsvex'
import mdsvex_config from './mdsvex.config.js'

import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [ '.svelte',  ...mdsvex_config.extensions ?? [] ],
    preprocess: [ 
        mdsvex(mdsvex_config), 
        preprocess({
            preserve: [ 'ld+json' ],
            postcss: true
        })
    ],
    kit: {
        adapter: adapter(),
        alias: {
            '!components': 'src/lib/components',
            '!css': 'src/lib/css',
            '!posts': 'src/lib/posts',
            '!types': 'src/lib/types',
        },
        csp: {
            mode: 'auto',
            directives: {
                'default-src': ['self'],
                'style-src': ['self', 'unsafe-inline']
            },
        },
        trailingSlash: 'always',
    },
}

export default config