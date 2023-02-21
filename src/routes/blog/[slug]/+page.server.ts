import type { PageServerLoad } from './$types'

import { posts } from '!posts'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = ({ params }) => {
    const index = posts.findIndex(post => post.slug === params.slug)

    if (index === -1)
        throw error(404, 'Post Not Found')

    return {
        post: posts[index],
        last: posts[index + 1],
        next: posts[index - 1]
    }
}