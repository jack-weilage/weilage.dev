import { sanity } from '$lib/sanity.server'
import { error } from '@sveltejs/kit'
import { q } from 'groqd'

export async function load() {
	const posts = await sanity(
		q('*')
			.filterByType('post')
			.order('_createdAt desc')
			.slice(0, 9)
			.grab({
				title: q.string(),
				description: q.string(),
				slug: q.slug('slug'),
				created_at: [
					'_createdAt',
					q.string().transform((date) =>
						new Date(date).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'numeric',
							year: 'numeric',
						}),
					),
				],
			}),
	).catch(() => {
		throw error(500, 'Internal Server Error')
	})

	return {
		posts,
	}
}
