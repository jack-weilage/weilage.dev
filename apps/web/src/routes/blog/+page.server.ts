import { sanity } from '$lib/sanity.server'
import { q } from 'groqd'
import { error } from '@sveltejs/kit'

export async function load() {
	const posts = await sanity(
		q('*')
			.filterByType('post')
			.order('_createdAt desc')
			.slice(0, 9)
			.grab({
				title: q.string(),
				description: q.string(),
				slug: ['slug.current', q.string()],
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
