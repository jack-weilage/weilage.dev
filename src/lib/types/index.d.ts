export interface ContactsResponse {
    [key: string]: {
        href:  string
        text:  string
        title: string
    }
}
export interface SitemapConfig {
    enabled: boolean
    priority: number
    changefreq: 'hourly' | 'daily' | 'monthly' | 'yearly'
}