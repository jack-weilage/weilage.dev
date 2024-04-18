import type { PageServerLoad } from './$types'

import { posts } from '$lib/posts'

export const load: PageServerLoad = () => ({
	posts: posts.map(({ slug, metadata }) => ({
		slug,
		title: metadata.title,
		description: metadata.description,
	})),
})
