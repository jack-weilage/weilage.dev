import adapter from '@sveltejs/adapter-vercel'

import preprocess from 'svelte-preprocess'

import postcss_autoprefixer from 'autoprefixer'
import postcss_preset_env from 'postcss-preset-env'

// eslint-disable-next-line unicorn/prevent-abbreviations
const is_dev = process.env['NODE_ENV'] === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            '!components': 'src/lib/components',
            '!css': 'src/lib/css',
            '!posts': 'src/lib/posts',
            '!types': 'src/lib/types.d.ts',
        },
        csp: {
            directives: {
                'default-src': [ 'self' ],
                'script-src': is_dev ? [ 'unsafe-inline', 'self' ] : undefined,
                'style-src': is_dev ? [ 'unsafe-inline', 'self' ] : undefined,
            },
            mode: 'auto',
        },
        prerender: {
            origin: 'https://weilage.dev',
        },
    },
    preprocess: [
        preprocess({
            postcss: {
                // Runs plugins in reverse? idk
                plugins: [
                    postcss_autoprefixer(),
                    postcss_preset_env({ stage: 1 }),
                ],
            },
            preserve: [ 'ld+json' ],
        }),
    ],
}

export default config
