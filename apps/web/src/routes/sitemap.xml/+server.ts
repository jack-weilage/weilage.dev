import type { SitemapConfig } from '$lib/types'

import { dirname, normalize } from 'node:path'

import { error } from '@sveltejs/kit'
import { sanity } from '$lib/sanity.server'
import { q } from 'groqd'

const construct_url = (data: Record<string, unknown>) =>
	Object.entries(data)
		.filter(([, value]) => !!value)
		.map(([key, value]) => `<${key}>${value}</${key}>`)
		.join('')

export async function GET({ url }) {
	let sitemap = ''

	const pages = import.meta.glob<SitemapConfig | undefined>(
		'../**/+page.svelte',
		{ eager: true, import: '_sitemap' },
	)
	for (const [path, options] of Object.entries(pages)) {
		if (!options?.enabled) {
			continue
		}

		const loc = normalize(`${url.origin}/sitemap.xml/${dirname(path)}/`)
		const { changefreq, priority } = options

		// eslint-disable-next-line sort-keys
		sitemap += `<url>${construct_url({ loc, changefreq, priority })}</url>`
	}

	const posts = await sanity(
		q('*')
			.filterByType('post')
			.grab({
				slug: q.slug('slug'),
				updated_at: [
					'_updatedAt',
					q.date().transform((date) => date.toISOString()),
				],
			}),
	).catch(() => {
		throw error(500)
	})

	for (const { slug, updated_at } of posts) {
		const loc = `${url.origin}/blog/${slug}/`

		// eslint-disable-next-line sort-keys
		sitemap += `<url>${construct_url({
			loc,
			changefreq: 'yearly',
			lastmod: updated_at,
		})}</url>`
	}

	return new Response(
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } },
	)
}
