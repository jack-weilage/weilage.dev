// import image from 'vite-image'
import { imagetools } from 'vite-imagetools'
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

export default {
	plugins: [ 
		imagetools(),
		// image(),
		sveltekit() 
	]
} as UserConfig