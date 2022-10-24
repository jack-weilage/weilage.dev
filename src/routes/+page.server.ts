import { posts_no_drafts } from '$lib/posts'

// Only return a few posts.
export const load: import('./$types').PageServerLoad = () => ({ posts: posts_no_drafts.slice(0, 5) })