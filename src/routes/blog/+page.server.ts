import type { PageServerLoad } from './$types'
import { posts } from '$lib/posts'

export const load: PageServerLoad = () => ({ posts })