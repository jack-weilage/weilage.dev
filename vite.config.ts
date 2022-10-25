import { imagetools } from 'vite-imagetools'
import { sveltekit }  from '@sveltejs/kit/vite'

export default {
	plugins: [ 
		imagetools(), 
		sveltekit() 
	]
} as import('vite').UserConfig