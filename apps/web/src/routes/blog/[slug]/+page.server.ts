import { database } from '$lib/database.server'
import { dev } from '$app/environment'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const post = await database
		.from('posts')
		.select('title,description,content')
		.eq('slug', params.slug)
		// Either draft === false or draft === dev.
		.or(`draft.eq.false,draft.eq.${dev}`)
		.limit(1)
		.maybeSingle()

	if (!post.data || post.error) {
		throw error(404, 'Post Not Found')
	}

	return {
		post: post.data,
	}
}
