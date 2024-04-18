import type { UserConfig } from 'vite'

import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'

export default {
	plugins: [enhancedImages(), sveltekit()],
} satisfies UserConfig
