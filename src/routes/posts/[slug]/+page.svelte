<script context="module" lang="ts">
	import type { SitemapConfig } from '$lib/types.js'
	// The sitemap generator already automatically adds all posts
	export const _sitemap: SitemapConfig = { enabled: false }
</script>

<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import { Chronosis } from 'chronosis'
	import 'prism-themes/themes/prism-one-dark.css'

	export let data

	const uploaded_at = new Chronosis(data.uploaded_at)
	const updated_at = new Chronosis(data.updated_at)
</script>

<SEO title={data.title} description={data.description} />

<main class="flex flex-col items-center p-4">
	<article
		class="prose prose-stone w-full max-w-3xl dark:prose-invert prose-a:no-underline"
	>
		<div class="mt-8">
			<p class="mb-0 text-sm text-stone-600 dark:text-stone-400">
				{uploaded_at.format('MMMM D, YYYY')}
				{#if +uploaded_at !== +updated_at}
					(Updated on {updated_at.format('MMMM D, YYYY')})
				{/if}
			</p>
			<h1 class="mt-0 text-balance text-3xl">{data.title}</h1>
		</div>

		{@html data.content}
	</article>
</main>
