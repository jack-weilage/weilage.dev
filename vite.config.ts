import type { UserConfig } from 'vite'

import { sveltekit }  from '@sveltejs/kit/vite'
import vite_image from 'vite-image'

export default {
	plugins: [
		vite_image(), sveltekit()
	]
} as UserConfig