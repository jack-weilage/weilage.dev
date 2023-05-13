import { sanity } from '$lib/sanity.server'
import { error } from '@sveltejs/kit'
import { q } from 'groqd'

export async function load({ params }) {
	const posts = await sanity(
		q('*')
			.filterByType('post')
			.filter(`slug.current == "${params.slug}"`)
			.grab({
				title: q.string(),
				description: q.string(),
				content: q.contentBlocks(),
			}),
	).catch(() => {
		throw error(500, 'Internal Server Error')
	})

	if (posts.length === 0) {
		throw error(404, 'Post Not Found')
	}

	return {
		post: posts[0],
	}
}
