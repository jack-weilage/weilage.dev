import adapter from '@sveltejs/adapter-vercel'

import { mdsvex } from 'mdsvex'
import mdsvex_config from './mdsvex.config.js'

import preprocess from 'svelte-preprocess'
import postcss_preset_env from 'postcss-preset-env'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [ '.svelte',  ...mdsvex_config.extensions ?? [] ],
    preprocess: [ 
        mdsvex(mdsvex_config), 
        preprocess({
            preserve: [ 'ld+json' ],
            postcss: {
                plugins: [
                    postcss_preset_env({
                        browsers: [ '>1%', 'not dead', 'last 2 versions' ],
                        stage: 1
                    })
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
