import type { UserConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'

export default {
	plugins: [ sveltekit() ],
	assetsInclude: [ '**/*.md' ]
} as UserConfig