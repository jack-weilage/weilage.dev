import { database } from '$lib/database.server'
import { dev } from '$app/environment'
import { error } from '@sveltejs/kit'

export async function load()
{
    const {
        data: posts,
        error: error_data,
    } = await database.from('posts')
        .select('title,description,slug,read_time,created_at')
        .eq('draft', false)

    if (error_data || !posts)
    {
        console.log(error_data)
        throw error(500, 'An error occurred while fetching posts.')
    }

    if (dev)
    {
        const { data: drafts } = await database.from('posts')
            .select('title,description,slug,read_time,created_at')
            .eq('draft', true)

        posts.push(...drafts ?? [])
    }

    return { posts }
}
