import { posts } from '$lib/posts'
import { error } from '@sveltejs/kit'
import type { EntryGenerator, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { slug } }) => {
	for (const post of posts) {
		if (post.slug !== slug) {
			continue
		}

		return {
			title: post.metadata.title,
			description: post.metadata.description,
			uploaded_at: post.metadata.uploaded_at,
			updated_at: post.metadata.updated_at,
			content: post.content,
		}
	}

	// Should never happen bc param matcher
	error(404, 'Not Found')
}

export const entries: EntryGenerator = () => {
	const slugs = posts.map(({ slug }) => ({ slug }))
	console.log(slugs)
	return slugs
}
export const prerender = true
