import type { UserConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'

export default {
    plugins: [
        sveltekit(),
    ],
} as UserConfig
