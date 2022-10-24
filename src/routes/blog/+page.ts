// I assume this route isn't prerenderable because of this load function?
export const prerender = false

import type { SitemapConfig } from '!types'
export const sitemap: SitemapConfig = { enabled: true, changefreq: 'weekly', priority: 1 }