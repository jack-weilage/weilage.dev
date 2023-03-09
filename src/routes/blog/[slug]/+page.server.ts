import type { PageServerLoad } from './$types'

import { database } from '$lib/database'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async function ({ params })
{
    const post = await database.from('posts')
        .select('title,description,slug,draft,content')
        .eq('draft', false)
        .eq('slug', params.slug)
        .limit(1)
        .maybeSingle()

    if (!post || post.error)
        throw error(404, 'Post Not Found')

    return {
        post: post.data,
    }
}
