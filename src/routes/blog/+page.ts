//TODO: Figure out why this page will return 404 if prerender is true.
export const prerender = false

export const sitemap: import('!types').SitemapConfig = { enabled: true, changefreq: 'weekly', priority: 1 }