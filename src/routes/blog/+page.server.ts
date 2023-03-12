import type { PageServerLoad } from './$types'

import { database } from '$lib/database.server'
import { dev } from '$app/environment'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async function ()
{
    const {
        data: posts,
        error: error_data,
    } = await database.from('posts')
        .select('title,description,slug,draft,read_time')
        .eq('draft', false)

    if (error_data || !posts)
    {
        console.log(error_data)
        throw error(500, 'An error occurred while fetching posts.')
    }

    if (dev)
    {
        const { data: drafts } = await database.from('posts')
            .select('title,description,slug,draft,read_time')
            .eq('draft', true)

        posts.push(...drafts ?? [])
    }

    return { posts }
}
