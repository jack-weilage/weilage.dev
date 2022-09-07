import { basename } from 'node:path'
import { json } from '@sveltejs/kit'
import { parse, type Metadata, type ParsedMetadata } from '!utils/posts'


import type { RequestHandler } from './$types'
export const GET: RequestHandler = async function ({  })
{
    const content = import.meta.glob<Metadata>('../../../blog/content/*.md', { import: 'metadata', eager: true })

    // This is probably a bad idea. This first loop parses metadata and throws away drafts...
    let parsed_posts: [ string, ParsedMetadata ][] = []
    for (const [ key, metadata ] of Object.entries(content))
    {
        const parsed = parse(metadata)
        if (parsed.draft)
            continue

        parsed_posts.push([ key, parsed ])
    }

    // But then we loop again to sort and reduce...
    const posts = parsed_posts
        //TODO: Use luxon's `.minus` function, not literal subtraction
        .sort(([, a], [, b]) => +a.date_published - +b.date_published)
        //BUG: If someone uses '.' in the slug of their blog post, this will not return the proper name
        //TODO: Fix bug above
        .reduce((acc, [ key, metadata ]) => ({ 
            ...acc, 
            [basename(key).split('.')[0]]: metadata 
        }), {})
    

    return json(posts)
}