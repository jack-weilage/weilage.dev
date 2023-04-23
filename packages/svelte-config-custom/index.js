import adapter from '@sveltejs/adapter-vercel'

import preprocess from 'svelte-preprocess'

import postcss_autoprefixer from 'autoprefixer'
import postcss_preset_env from 'postcss-preset-env'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
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
