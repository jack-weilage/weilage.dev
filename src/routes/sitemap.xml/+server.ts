import type { SitemapConfig } from '!types'
import type { RequestHandler } from './$types'

import { dirname, normalize } from 'path'
import { filename } from '$lib/utils'

const construct_url = (data: Record<string, unknown>) => Object.entries(data)
    .filter(([, value ]) => !!value)
    .map(([ key, value ]) => `<${key}>${value}</${key}>`)
    .join('')

export const GET: RequestHandler = function ({ url })
{
    let sitemap = ''

    const pages = import.meta.glob<SitemapConfig | undefined>('../**/+page.svelte', { import: '_sitemap', eager: true })
    for (const [ path, options ] of Object.entries(pages))
    {
        if (!options?.enabled)
            continue
        
        const loc = normalize(`${url.origin}/sitemap.xml/${dirname(path)}/`)
        const { changefreq, priority } = options

        sitemap += `<url>${construct_url({ loc, changefreq, priority })}</url>`
    }

    // Every blog post is shown by default. If a post needs to be hidden, it'll be removed from the repo.
    const posts = import.meta.glob('../../lib/posts/content/*.md')
    for (const path of Object.keys(posts))
    {
        const loc = normalize(`${url.origin}/blog/${filename(path)}/`)
        // const lastmod = dayjs(date).format('YYYY-MM-DD')

        sitemap += `<url>${construct_url({ loc, changefreq: 'yearly' })}</url>`
    }

    return new Response(
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`,
        { headers: { 'Content-Type': 'application/xml' } }
    )
}