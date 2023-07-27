<!-- TODO: Add the prev/next display back. -->
<script lang="ts" context="module">
	import type { SitemapConfig } from '$lib/types'
	export const _sitemap: SitemapConfig = { enabled: false }
</script>

<script lang="ts">
	import { SEO } from 'ui'
	import { PortableText, DefaultListItem } from '@portabletext/svelte'
	import { balance } from '$lib/balance'

	export let data
</script>

<SEO title={data.post.title} description={data.post.description} />

<main id="main-content">
	<h1 use:balance>{data.post.title}</h1>
	<p use:balance>{data.post.description}</p>
	<article>
		<PortableText
			value={data.post.content}
			components={{
				listItem: {
					bullet: DefaultListItem,
					number: DefaultListItem,
					normal: DefaultListItem,
				},
			}}
		/>
	</article>
</main>

<style lang="postcss">
	main {
		max-width: 80ch;
		margin: 0 auto;
		padding: 6rem 3vw;

		@media print {
			margin: 0;
		}
		& > h1 {
			margin-block: 5rem 0;

			font-size: 3.75rem;
		}
		& > p {
			margin: 0.25rem 0 2.5rem;

			font-size: 0.9em;
			color: var(--color--text-alt);
		}
		& > article {
			& > :global(h2) {
				margin-top: 3rem;
			}
		}
	}
</style>
