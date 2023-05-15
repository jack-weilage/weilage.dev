import { sanity } from '$lib/sanity.server'
import { error } from '@sveltejs/kit'
import { q } from 'groqd'

export async function load({ params }) {
	const post = await sanity(
		q('*')
			.filterByType('post')
			.filter(`slug.current == "${params.slug}"`)
			//eslint-disable-next-line unicorn/prefer-spread
			.slice(0)
			.grab({
				title: q.string(),
				description: q.string(),
				content: q.contentBlocks(),
			}),
	).catch(() => {
		throw error(500, 'Internal Server Error')
	})

	if (!post) {
		throw error(404, 'Post Not Found')
	}

	return {
		post,
	}
}
