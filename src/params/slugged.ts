import { posts } from '$lib/posts'
import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (slug) => {
	return posts.some((post) => post.slug === slug)
}
