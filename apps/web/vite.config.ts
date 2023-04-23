import type { UserConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'

export default {
    assetsInclude: [ '**/*.md' ],
    plugins: [
        sveltekit(),
    ],
} as UserConfig
