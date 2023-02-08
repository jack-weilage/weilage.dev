import type { PageServerLoad } from './$types'

import { posts_no_drafts as posts } from '$lib/posts'

export const load: PageServerLoad = () => ({ posts })