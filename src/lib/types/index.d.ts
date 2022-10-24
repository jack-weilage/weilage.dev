export interface SitemapConfig {
    enabled: boolean
    priority?: number
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    lastmod?: string
}
export interface ViteGlobImport {
    [path: string]: {
        default: {
            render(): { 
                html: string
            }
        }
        metadata: Record<string, any>
    }
}
export interface Heading {
    depth: number
    value: string
    id: string
}
export interface PostData {
    slug: string
    draft: boolean
    title: string
    description: string
    date: string
    wordcount: number
    tags: string[]
    headings: Heading[]
}