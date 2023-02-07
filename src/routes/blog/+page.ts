import type { SitemapConfig } from '!types'
//TODO: Figure out why this page will return 404 if prerender is true.
export const prerender = false

export const _sitemap: SitemapConfig = {
    enabled: true,
    priority: 1,
    changefreq: 'weekly'
}