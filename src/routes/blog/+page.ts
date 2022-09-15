// I assume this route isn't prerenderable because of this load function?
export const prerender = false

import type { Metadata } from '!utils/posts'

import type { PageLoad } from './$types'
export const load: PageLoad = async ({ fetch }) => ({ 
    posts: await fetch('/api/blog/posts')
        .then(res => res.json()) as Record<string, Metadata>
})

import type { SitemapConfig } from '!types'
export const sitemap: SitemapConfig = { enabled: true, changefreq: 'weekly', priority: 1 }