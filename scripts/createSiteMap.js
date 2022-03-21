import { fragment } from 'xmlbuilder2'
import fs from 'fs'

// domain should never change
const domain = 'https://weilage.dev'

import('../build/manifest.js').then(({ manifest }) => {
    // initialize the xml builder with the urlset
    const sitemap = fragment().ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' })

    // for each page in the manifest, add a url to the sitemap
    manifest._.routes.filter(route => route.type === 'page')
        // this is a hack for right now, fix when blog is ready
        .filter(route => route.path !== null)
        .forEach(route => sitemap.ele({
            url: {
                loc: `${domain}${route.path}`,
                changefreq: 'daily',
                priority: route.path === '/' ? 1 : 0.5
            }
        }))
    
    console.log('completed sitemap generation')
    fs.writeFileSync('build/static/sitemap.xml', sitemap.end())

    const manifest_str = fs.readFileSync('build/manifest.js')

    if (!manifest_str.includes('"sitemap.xml"')) {
        console.log('adding sitemap to manifest')
        const idx = manifest_str.indexOf('assets: new Set([') + 'assets: new Set(['.length

        fs.writeFileSync('build/manifest.js', `${manifest_str.slice(0, idx)}"sitemap.xml",${manifest_str.slice(idx)}`)
    } else {
        console.log('sitemap already in manifest')
    }
})