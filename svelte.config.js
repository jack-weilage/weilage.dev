import adapter from '@sveltejs/adapter-vercel'

import { mdsvex } from 'mdsvex'
import mdsvex_config from './mdsvex.config.js'

import preprocess from 'svelte-preprocess'

import postcss_preset_env from 'postcss-preset-env'
import postcss_autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [ '.svelte',  ...mdsvex_config.extensions ?? [] ],
    preprocess: [ 
        mdsvex(mdsvex_config), 
        preprocess({
            preserve: [ 'ld+json' ],
            postcss: {
                plugins: [
                    postcss_preset_env({ stage: 1 }),
                    postcss_autoprefixer()
                ]
            }
        })
    ],
    kit: {
        adapter: adapter(),
        alias: {
            '!components': 'src/lib/components',
            '!css': 'src/lib/css',
            '!posts': 'src/lib/posts',
            '!types': 'src/lib/types.d.ts',
        },
        csp: {
            mode: 'auto',
            directives: {
                'default-src': [ 'self' ],
                'style-src': [ 'self', 'unsafe-inline' ]
            },
        },
    },
}

export default config