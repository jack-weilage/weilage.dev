/** 
 * TODO: Decide whether to use `+page.ts` or `+page.svelte`
 * 
 * TODO: Escape characters in the XML.
 * TODO: Add the last modified date to the XML.
 * TODO: Allow the user to specify more than one sitemap.
 * TODO: Fix fallthrough routes.
 */
import type { SitemapConfig } from '$lib/types'
import { defaults } from '$lib/utils'
import svelte_config from '../../../svelte.config'

/** Default sitemap config (will apply when config is falsy) */
const default_config: SitemapConfig = {
    enabled: false,
    priority: 0.5,
    changefreq: 'daily'
}
const trailingSlash = svelte_config.kit?.trailingSlash === 'always' ? '/' : ''


import type { RequestHandler } from './$types'
export const GET: RequestHandler = async function({ url, setHeaders })
{
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const files = import.meta.importGlob<SitemapConfig>('../**/+page.ts', { import: 'sitemap' })

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
        sitemap += '<url>'
        for (const [ element, value ] of Object.entries(elements))
        {
            sitemap += `<${element}>${value}</${element}>`
        }
        sitemap += '</url>'
    }
    
    // Construct sitemap.
    sitemap += '</urlset>'
    // throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
    // Suggestion (check for correctness before using):
    // return json(sitemap, {
    //     headers: {
    //         'Cache-Control': 'no-cache',
    //         'Content-Length': sitemap.length,
    //         'Content-Type': 'application/xml'
    //     }
    // });
    setHeaders({
        'Cache-Control': 'no-cache',
        'Content-Length': sitemap.length,
        'Content-Type': 'application/xml'
    })
    return new Response(sitemap)

    // return {
    //     status: 200,
    //     headers: {
    //         'Cache-Control': 'no-cache',
    //         'Content-Length': sitemap.length,
    //         'Content-Type': 'application/xml'
    //     },
    //     body: sitemap
    // }
}