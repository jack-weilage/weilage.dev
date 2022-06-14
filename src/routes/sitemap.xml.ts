import type { RequestHandlerOutput } from '@sveltejs/kit/types'

const url = 'https://weilage.dev'
export async function get(): Promise<RequestHandlerOutput>
{
    const urls = Object.keys(import.meta.glob('./**/*.svelte'))
        // Ignore the leading dot
        .map(file => file.substring(1))
        // Ignore any files starting with an underscore
        .filter(file => !file.includes('/_'))
        // Convert to proper URLs
        .map(file => url + file.replace('index.svelte', '').replace('.svelte', '/'))
        // Create XML
        .map(file => `<url><loc>${file}</loc><changefreq>daily</changefreq><priority>1</priority></url>`)
        .join('')

    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

    return {
        status: 200,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Length': sitemap.length,
            'Content-Type': 'application/xml'
        },
        body: `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
    }
}