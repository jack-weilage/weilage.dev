/** 
 * TODO: Decide whether to use `+page.ts` or `+page.svelte`
 * 
 * TODO: Escape characters in the XML.
 * TODO: Add the last modified date to the XML.
 * TODO: Allow the user to specify more than one sitemap.
 * TODO: Fix fallthrough routes.
 */
import type { SitemapConfig } from '!types'
import { defaults } from '!utils'
import svelte_config from '../../../svelte.config'

/** Default sitemap config (will apply when config is falsy) */
const default_config: SitemapConfig = {
    enabled: false,
    priority: 0.5,
    changefreq: 'daily'
}
const trailingSlash = svelte_config.kit?.trailingSlash === 'always' ? '/' : ''

const construct_element = (element: string, innerText: string) => `<${element}>${innerText}</${element}>`

import type { RequestHandler } from './$types'
export const GET: RequestHandler = async function({ url })
{
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const files = import.meta.glob<SitemapConfig>('../**/+page.ts', { import: 'sitemap' })

    for (const [ path, options ] of Object.entries(files))
    {
        // Get the sitemap config.
        const config = await options()
            .then(config => config ? defaults(config, default_config) : default_config)
        
        // If sitemap is not enabled, ignore file.
        if (!config.enabled)
            continue
        
        // Create an object for all per-url sitemap elements. Keys are element names, values are element values
        const elements = {
            loc: url.origin + path.substring(2).replace('/+page.ts', trailingSlash),
            changefreq: config.changefreq, 
            priority: config.priority 
        }

        // Construct urlset.
        sitemap += construct_element(
            'url', 
            Object.entries(elements)
                .map(([ element, value ]) => construct_element(element, value.toString()))
                .join('')
        )
    }
    
    // Construct sitemap.
    sitemap += '</urlset>'

    return new Response(sitemap, {
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Length': sitemap.length.toString(),
            'Content-Type': 'application/xml'
        }
    })
}