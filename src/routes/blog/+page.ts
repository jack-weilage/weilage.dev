// I assume this route isn't prerenderable because of this load function?
export const prerender = false

export const sitemap: import('!types').SitemapConfig = { enabled: true, changefreq: 'weekly', priority: 1 }