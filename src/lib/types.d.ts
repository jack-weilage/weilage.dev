export interface SitemapConfig {
    enabled: boolean
    priority?: number
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    lastmod?: string
}
interface Robots {
    noindex?: boolean
    nofollow?: boolean
    noarchive?: boolean
}
export interface PostData {
    html: string
    slug: string
    title: string
    description: string
    date: number
    read_time: number
}
