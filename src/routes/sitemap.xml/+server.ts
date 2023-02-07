import type { RequestHandler } from './$types'
import type { SitemapConfig } from '!types'

import { posts_no_drafts as posts } from '$lib/posts'

const escape = (str: string) => str.replace(/["'<>&]/g, '')
const construct_url = (elements: Record<string, any>) => 
    `<url>${Object.entries(elements).map(([ el, val ]) => `<${el}>${escape(val.toString())}</${el}>`).join('')}</url>`

export const GET: RequestHandler = async function({ url })
{
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

    const files = import.meta.glob<SitemapConfig>('../**/+page.ts', { import: '_sitemap' })
    for (const [ path, options ] of Object.entries(files))
    {
        // Get the sitemap config.
        const config = await options()
        
        // If sitemap is not enabled, ignore file.
        if (!config || !config.enabled)
            continue

        const elements = {
            loc: url.origin + path
                .replace(/^\.\./, '')
                .replace(/\/\+page\.ts$/, '/'),
            ...(config.changefreq ? { changefreq: config.changefreq } : undefined),
            ...(config.priority   ? { priority: config.priority }     : undefined)
        }
        sitemap += construct_url(elements)
    }

    for (const post of posts)
    {
        const elements = {
            loc: `${url.origin}/blog/${post.slug}/`,
            lastmod: post.date,
            priority: 0.5
        }
        sitemap += construct_url(elements)
    }

    sitemap += '</urlset>'

    return new Response(sitemap, { headers: { 'Content-Type': 'application/xml' } })
}
