import type { SitemapConfig } from '!types'
import type { Metadata } from '!utils/posts'
import svelte_config from '../../../svelte.config'

const trailingSlash = svelte_config.kit?.trailingSlash === 'always' ? '/' : ''

const escape = (str: string) => str.replace(/["'<>&]/g, '')
const construct_url = (elements: Record<string, string | number>) => 
    `<url>${Object.entries(elements).map(([ el, val ]) => `<${el}>${escape(val.toString())}</${el}>`).join('')}</url>`

import type { RequestHandler } from './$types'
export const GET: RequestHandler = async function({ url })
{
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    
    const files = import.meta.glob<SitemapConfig>('../**/+page.ts', { import: 'sitemap' })
    for (const [ path, options ] of Object.entries(files))
    {
        // Get the sitemap config.
        const config = await options()
        
        // If sitemap is not enabled, ignore file.
        if (!config || !config.enabled)
            continue

        sitemap += construct_url({
            loc: url.origin + path
                .replace(/^\.\./, '')
                .replace(/\/\+page\.ts$/, trailingSlash),
            ...(config.changefreq ? { changefreq: config.changefreq } : undefined),
            ...(config.priority ? { priority: config.priority } : undefined)
        })
    }

    const blog_posts = await fetch(new URL('/api/blog/posts', url.origin)).then(res => res.json()) as Record<string, Metadata>
    for (const [ slug, metadata ] of Object.entries(blog_posts))
    {
        const elements = {
            loc: `${url.origin}/blog/${slug}`,
            lastmod: metadata.date_modified || metadata.date_published,
            priority: 0.5
        }

        sitemap += construct_url(elements)
    }

    sitemap += '</urlset>'

    return new Response(sitemap, {
        headers: {
            // 'Cache-Control': 'no-cache',
            // 'Content-Length': sitemap.length.toString(),
            'Content-Type': 'application/xml'
        }
    })
}
