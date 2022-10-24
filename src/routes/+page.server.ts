import type { PageServerLoad } from './$types'
import { posts } from '$lib/posts'

// Only return a few posts.
export const load: PageServerLoad = () => ({ posts: posts.slice(0, 5) })