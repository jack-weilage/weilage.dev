export interface SitemapConfig {
    enabled: boolean
    priority?: number
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    lastmod?: string
}