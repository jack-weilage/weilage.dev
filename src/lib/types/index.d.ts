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
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}
export interface ExampleComponent {
    name: string
    description: string
    //TODO: Find a good type for components (not SvelteComponent)
    component: any
    props?: Record<string, any>
}