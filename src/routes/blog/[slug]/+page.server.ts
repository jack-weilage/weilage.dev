import { posts } from '$lib/posts'
import { error } from '@sveltejs/kit'
import dayjs from 'dayjs'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = function ({ params })
{
    const post = posts.find(post => post.slug === params.slug)

    if (!post || post.draft)
        throw error(404, 'Post not found')
    
    // Dates are static on the client, so we do all the work here. Saves like 10 KB
    const date = dayjs(post.date)

    return {
        post,
        date: {
            iso: date.toISOString(),
            format: date.format('MMMM D, YYYY')
        }
    }
}