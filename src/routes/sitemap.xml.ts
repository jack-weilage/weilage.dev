/**
 * TODO: Use `svelte.config.js` to adjust the sitemap.
 */
const create_xml = (url: string) => `<url><loc>https://weilage.dev${url}</loc><changefreq>daily</changefreq><priority>1</priority></url>`

import type { RequestHandler } from '@sveltejs/kit/types'
export const get: RequestHandler = function()
{
    const urls = Object.keys(import.meta.glob('./**/*.svelte'))
        // Ignore any files starting with an underscore
        .filter(file => !file.includes('/_'))
        // Convert to proper URLs and assemble XML (could be done with multiple `.map` calls)
        .map(file => create_xml(file.substring(1).replace('/index.svelte', '/').replace('.svelte', '/')))
        .join('')
    
    const body = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

    return {
        status: 200,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Length': body.length,
            'Content-Type': 'application/xml'
        },
        body
    }
}