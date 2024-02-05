<script context="module" lang="ts">
	import type { SitemapConfig } from '$lib/types'
	export const _sitemap: SitemapConfig = {
		enabled: true,

		changefreq: 'weekly',
		priority: 1,
	}
</script>

<script lang="ts">
	import Figma from 'lucide-svelte/icons/figma'
	import Github from 'lucide-svelte/icons/github'
	import Mail from 'lucide-svelte/icons/mail'

	import Link from '$lib/components/Link.svelte'
	import SEO from '$lib/components/SEO.svelte'
</script>

<SEO
	title="Home - Jack Weilage"
	description="The homepage of Jack Weilage, a web developer and designer."
	json_ld={{
		'@context': 'http://schema.org/',
		'@type': 'Person',
		name: 'Jack Weilage',

		email: 'jack@weilage.dev',
		gender: 'Male',
		image: '/images/pfp.jpg',
		sameAs: ['https://github.com/jack-weilage', 'https://figma.com/@weilage'],
		url: 'https://weilage.dev/',
	}}
/>

<main id="main-content">
	<h1>Jack Weilage</h1>
	<p>Web Developer and Designer</p>
	<ul>
		<li>
			<Link href="mailto:jack@weilage.dev" title="Email me at jack@weilage.dev">
				<Mail aria-hidden="true" size="20px" />
			</Link>
		</li>
		<li>
			<Link
				href="https://github.com/jack-weilage"
				title="Read my code on GitHub"
			>
				<Github aria-hidden="true" size="20px" />
			</Link>
		</li>
		<li>
			<Link
				href="https://www.figma.com/@weilage"
				title="Check out my designs on Figma"
			>
				<Figma aria-hidden="true" size="20px" />
			</Link>
		</li>
	</ul>
</main>

<style lang="postcss">
	main {
		height: 100vh;
		height: 100dvh;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		& > :is(h1, p, ul) {
			max-width: max-content;
			margin: 0;
		}
		& > h1 {
			font-size: clamp(2.25rem, 14vw, 2.75rem);
		}
		& > p {
			font-size: clamp(0.75em, 5vw, 1em);
			color: var(--color--text-alt);
		}
		& > ul {
			list-style: none;

			display: flex;
			justify-content: center;

			gap: 1.35rem;

			margin-block-start: 1rem;
			padding: 0;
		}
	}
</style>
