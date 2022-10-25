//TODO: Figure out why this page will return 404 if prerender is true.
// This path cannot be prerendered as each slug is a different page. I think that's how it works?
export const prerender = false

export const load: import('./$types').PageLoad = async function ({ params, data })
{
    const component = await import(`../content/${params.slug}.md`).then(content => content.default)

    return {
        component,
        ...data
    }
}