import { sanity } from '$lib/sanity.server'
import { error } from '@sveltejs/kit'
import { q } from 'groqd'

export async function load({ params }) {
	const post = await sanity(
		q('*')
			.filterByType('post')
			.filter(`slug.current == "${params.slug}"`)
			.slice(0)
			.grab({
				title: q.string(),
				description: q.string(),
				content: q.contentBlocks(),
			}),
	).catch((error) => {
		console.log(error)
		throw error(500, 'Internal Server Error')
	})

	if (!post) {
		//TODO: This won't be reached.
		error(404, 'Post Not Found')
	}

	return {
		post,
	}
}
