import { posts as unfiltered_posts } from '$lib/posts'
import { error } from '@sveltejs/kit'
import dayjs from 'dayjs'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = function ({ params })
{
    const posts = unfiltered_posts.filter(post => !post.draft)

    const index = posts.findIndex(post => post.slug === params.slug)
    const post = posts[index]

    if (!post)
        throw error(404, 'Post not found')
    
    // Dates are static on the client, so we do all the work here. Saves like 10 KB
    const date = dayjs(post.date)

    return {
        post,
        date: {
            iso: date.toISOString(),
            format: date.format('MMMM D, YYYY')
        },

        // Posts are ordered from recent to old, so reverse the order here
        last: posts[index + 1],
        next: posts[index - 1]
    }
}