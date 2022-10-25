import { posts_no_drafts as posts } from '$lib/posts'
import { error } from '@sveltejs/kit'

export const load: import('./$types').PageServerLoad = function ({ params })
{
    const index = posts.findIndex(post => post.slug === params.slug)
    const post = posts[index]

    if (!post)
        throw error(404, 'Post Not Found')
    
    return {
        post,
        // Posts are ordered from recent to old, so reverse the order here
        last: posts[index + 1],
        next: posts[index - 1]
    }
}