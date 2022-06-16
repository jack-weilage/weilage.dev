/**
 * TODO: Use `svelte.config.js` to adjust the sitemap.
 */
import type { RequestHandler } from '@sveltejs/kit/types'
export const get: RequestHandler = function()
{
    const urls = Object.keys(import.meta.glob('./**/*.svelte'))
        // Ignore any files starting with an underscore
        .filter(file => !file.includes('/_'))
        // Convert to proper URLs and assemble XML (could be done with multiple `.map` calls)
        .map(file => `<url><loc>https://weilage.dev${file.substring(1).replace('/index.svelte', '/').replace('.svelte', '/')}</loc><changefreq>daily</changefreq><priority>1</priority></url>`)
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