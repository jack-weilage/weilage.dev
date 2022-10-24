// This path cannot be prerendered as each slug is a different page. I think that's how it works?
export const prerender = false

import type { PageLoad } from './$types'
export const load: PageLoad = async function ({ params, data })
{
    const component = await import(`../content/${params.slug}.md`).then(content => content.default)

    return {
        component,
        ...data
    }
}