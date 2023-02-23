import adapter from '@sveltejs/adapter-vercel'

import preprocess from 'svelte-preprocess'

import postcss_reporter from 'postcss-reporter'
import postcss_stylelint from 'stylelint'
import postcss_autoprefixer from 'autoprefixer'
import postcss_preset_env from 'postcss-preset-env'

const is_dev = process.env['NODE_ENV'] === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [ 
        preprocess({
            preserve: [ 'ld+json' ],
            postcss: {
                // Runs plugins in reverse? idk
                plugins: [
                    ...(is_dev ? [ postcss_reporter(), postcss_stylelint() ]: []),
                    postcss_autoprefixer(),
                    postcss_preset_env({ stage: 1 })
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
                'style-src': is_dev ? [ 'unsafe-inline', 'self' ] : undefined,
                'script-src': is_dev ? [ 'unsafe-inline', 'self' ] : undefined
            }
        },
        prerender: {
            origin: 'https://weilage.dev'
        }
    }
}

export default config