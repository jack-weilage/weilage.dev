import { database } from '$lib/database.server'
import { error } from '@sveltejs/kit'

export async function load({ params })
{
    const post = await database.from('posts')
        .select('title,description,content')
        .eq('draft', false)
        .eq('slug', params.slug)
        .limit(1)
        .maybeSingle()

    if (!post?.data || post.error)
        throw error(404, 'Post Not Found')

    return {
        post: post.data,
    }
}
