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
            scss: { 
                prependData: `@import './src/lib/css/mixins.scss';` 
            }
        })
    ],
    kit: {
        adapter: adapter(),
        alias: {
            '!actions': 'src/lib/actions',
            '!components': 'src/lib/components',
            '!css': 'src/lib/css',
            '!images': 'src/images',
            '!types': 'src/lib/types',
            '!utils': 'src/lib/utils',
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
