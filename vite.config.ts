import { imagetools } from 'vite-imagetools'
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [ imagetools(), sveltekit() ],
}

export default config