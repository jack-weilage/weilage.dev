import { posts_no_drafts as posts } from '$lib/posts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({ posts })