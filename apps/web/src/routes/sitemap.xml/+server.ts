import type { SitemapConfig } from '$lib/types'

import { dirname, normalize } from 'node:path'

import { database } from '$lib/database.server'
import { error } from '@sveltejs/kit'

const construct_url = (data: Record<string, unknown>) => Object.entries(data)
    .filter(([ , value ]) => !!value)
    .map(([ key, value ]) => `<${key}>${value}</${key}>`)
    .join('')

export async function GET({ url })
{
    let sitemap = ''

    const pages = import.meta.glob<SitemapConfig | undefined>(
        '../**/+page.svelte',
        { eager: true, import: '_sitemap' },
    )
    for (const [ path, options ] of Object.entries(pages))
    {
        if (!options?.enabled)
            continue

        const loc = normalize(`${url.origin}/sitemap.xml/${dirname(path)}/`)
        const { changefreq, priority } = options

        // eslint-disable-next-line sort-keys
        sitemap += `<url>${construct_url({ loc, changefreq, priority })}</url>`
    }

    const posts = await database.from('posts')
        .select('slug,created_at,updated_at')
        .eq('draft', false)

    if (posts.error)
        throw error(500)

    for (const post of posts.data)
    {
        const loc = `${url.origin}/blog/${post.slug}/`
        const lastmod = post.updated_at || post.created_at

        // eslint-disable-next-line sort-keys
        sitemap += `<url>${construct_url({ loc, changefreq: 'yearly', lastmod })}</url>`
    }

    return new Response(
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`,
        { headers: { 'Content-Type': 'application/xml' } },
    )
}
