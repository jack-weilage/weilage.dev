import { imagetools } from 'vite-imagetools'
import { sveltekit }  from '@sveltejs/kit/vite'

import type { UserConfig } from 'vite'

export default {
	plugins: [ 
		imagetools(), 
		sveltekit() 
	]
} as UserConfig