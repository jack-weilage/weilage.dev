import { posts_no_drafts as posts } from '$lib/posts'

export const load: import('./$types').PageServerLoad = () => ({ posts })