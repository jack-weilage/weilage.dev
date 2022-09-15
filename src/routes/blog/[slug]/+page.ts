// This path cannot be prerendered as each slug is a different page. I think that's how it works?
export const prerender = false

import { error } from '@sveltejs/kit'
import { parse, type Metadata } from '!utils/posts'

import type { PageLoad } from './$types'
export const load: PageLoad = async function ({ params })
{
    const data = await (import(`../content/${params.slug}.md`) as Promise<{ default: any, metadata: Metadata }>)
        .catch(() => { throw error(404, `Article "${params.slug}" was could not be loaded.`) })

    const metadata = parse(data.metadata)
    if (metadata.draft)
        throw error(404, `Article "${params.slug}" was not found. (Draft)`)

    return {
        component: data.default,
        ...metadata
    }
}