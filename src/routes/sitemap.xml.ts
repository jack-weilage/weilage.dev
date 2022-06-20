/**
 * TODO: Use `svelte.config.js` to adjust the sitemap.
 * LIMIT: Glob patterns must be static, meaning that per-extension globs are not possible
 */
import type { SitemapConfig } from '$lib/types'
import { defaults } from '$lib/utils'

/** Default sitemap config (will apply when config is falsy) */
const default_config: SitemapConfig = {
    enabled: false,
    priority: 1,
    changefreq: 'daily'
}

import svelte_config from '../../svelte.config'
const trailingSlash = (svelte_config.kit?.trailingSlash ?? 'never') === 'always' ? '/' : ''

import type { RequestHandler } from '@sveltejs/kit/types'
export const get: RequestHandler = async function()
{
    let urlset = ''
    const files = import.meta.importGlob<SitemapConfig>('./**/*.svelte', { import: 'sitemap' })

    for (const [ path, options ] of Object.entries(files))
    {
        // If path starts with an underscore, ignore file.
        if (path.includes('/_'))
            continue

        // Get the sitemap config.
        const config = await options()
            .then(config => config ? defaults(config, default_config) : default_config)
        
        // If sitemap is not enabled, ignore file.
        if (!config.enabled)
            continue
        
        // Create an object for all per-url sitemap elements. Keys are element names, values are element values
        const elements = { 
            /**
             *  - If the path is in a folder, like `routes/test/index.svelte`, first replacement will remove the trailing `index.svelte` or `/index.svelte`.
             *  - If the path is standalone, like `routes/test.svelte`, second replacement will replace the trailing `.svelte` with `/` or remove it.
             */
            loc: `https://weilage.dev${path.substring(1).replace('/index.svelte', trailingSlash).replace('.svelte', trailingSlash)}`, 
            changefreq: config.changefreq, 
            priority: config.priority 
        }

        // Construct urlset.
        urlset += '<url>'
        for (const [ element, value ] of Object.entries(elements))
        {
            urlset += `<${element}>${value}</${element}>`
        }
        urlset += '</url>'
    }
    
    // Construct sitemap.
    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`
    return {
        status: 200,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Length': sitemap.length,
            'Content-Type': 'application/xml'
        },
        body: sitemap
    }
}