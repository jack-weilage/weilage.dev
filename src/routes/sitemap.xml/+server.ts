import type { SitemapConfig } from '$lib/types'

import { posts } from '$lib/posts'
import { dirname, normalize } from 'node:path'
import type { RequestHandler } from './$types'

const construct_url = (data: Record<string, unknown>) =>
	Object.entries(data)
		.filter(([, value]) => !!value)
		.map(([key, value]) => `<${key}>${value}</${key}>`)
		.join('')

export const GET: RequestHandler = ({ url }) => {
	let sitemap = ''

	const pages = import.meta.glob<SitemapConfig | undefined>(
		'../**/+page.svelte',
		{ eager: true, import: '_sitemap' },
	)
	for (const [path, options] of Object.entries(pages)) {
		if (!options?.enabled) {
			continue
		}

		//TODO: This is a very naive way of determining paths and will fail for anything in a capture group or parameter
		const loc = normalize(`${url.origin}/sitemap.xml/${dirname(path)}/`)
		const { changefreq, priority } = options

		sitemap += `<url>${construct_url({ loc, changefreq, priority })}</url>`
	}

	for (const {
		slug,
		metadata: { updated_at },
	} of posts) {
		sitemap += `<url>${construct_url({
			loc: `${url.origin}/posts/${slug}/`,
			lastmod: updated_at.toISOString(),
		})}</url>`
	}

	return new Response(
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } },
	)
}
