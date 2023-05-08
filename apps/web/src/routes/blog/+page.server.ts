import { database } from '$lib/database.server'
import { dev } from '$app/environment'
import { error } from '@sveltejs/kit'

export async function load() {
	const posts = await database
		.from('posts')
		.select('title,description,slug,read_time,created_at')
		.or(`draft.eq.false,draft.eq.${dev}`)

	if (posts.error) {
		throw error(500, 'An error occurred while fetching posts.')
	}

	return {
		posts: posts.data,
	}
}
