<script context="module" lang="ts">
	import type { SitemapConfig } from '$lib/types'
	export const _sitemap: SitemapConfig = {
		enabled: true,
	}
</script>

<script lang="ts">
	import ChevronDown from 'lucide-svelte/icons/chevron-down'
	import Github from 'lucide-svelte/icons/github'
	import Mail from 'lucide-svelte/icons/mail'

	import Project from './Project.svelte'
	import Phrases from './Phrases.svelte'
	import SEO from '$lib/components/SEO.svelte'

	export let data
</script>

<SEO title="Jack Weilage" description="test" />

<main
	class="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth [&>section:nth-child(2n)]:bg-zinc-100 [&>section:nth-child(2n)]:dark:bg-zinc-900"
>
	<section
		class="relative flex h-dvh snap-start flex-col items-center justify-center p-2"
	>
		<h1 class="text-center text-4xl font-bold">Jack Weilage</h1>
		<Phrases
			phrases={[
				// 'learning everything he can',
				'learning new things',
				'writing tests',
				// 'struggling with the borrow checker',
				'obsessing over benchmarks',
				'waiting for the compiler',
				'debugging weird behavior',
				'optimizing everything',
				'installing packages',
				'updating dependencies',
				'reloading websites',
			]}
		/>
		<ul class="mt-1 flex gap-x-4">
			<li>
				<a
					href="https://github.com/jack-weilage"
					target="_blank"
					class="block p-1"
					title="Open my Github profile"
				>
					<Github aria-label="Github logo" class="size-5" />
				</a>
			</li>
			<li>
				<a
					href="mailto:jack@weilage.dev"
					class="block p-1"
					title="Send me an email"
				>
					<Mail aria-label="Email logo" class="size-5" />
				</a>
			</li>
		</ul>
		<a
			href="#projects"
			class="absolute bottom-4 p-2"
			title="Jump to next section"
		>
			<ChevronDown aria-label="Arrow pointing down" />
		</a>
	</section>
	<section
		id="projects"
		class="relative flex h-dvh snap-start flex-col items-center justify-center p-4"
	>
		<h2 class="text-2xl font-bold">Projects</h2>
		<ul class="w-full max-w-xl">
			<Project href="https://whatcom.live" name="whatcom.live">
				A real-time map of Whatcom County public services, built with <a
					href="https://kit.svelte.dev"
					class="font-bold"
				>
					SvelteKit
				</a>.
			</Project>
			<Project
				href="https://github.com/jack-weilage/svelte-mapbox"
				name="svelte-mapbox"
			>
				An ergonomic wrapper around <a
					href="https://github.com/mapbox/mapbox-gl-js"
					class="font-bold"
				>
					mapbox-gl-js
				</a>
				for <a href="https://svelte.dev" class="font-bold">Svelte</a>.
			</Project>
			<Project
				href="https://github.com/jack-weilage/chronosis"
				name="chronosis"
			>
				The smallest (&lt;1kb) and fastest JavaScript date manipulation library.
			</Project>
		</ul>
		<a href="#posts" class="absolute bottom-4 p-2" title="Jump to next section">
			<ChevronDown aria-label="Arrow pointing down" />
		</a>
	</section>
	<section
		id="posts"
		class="relative flex h-dvh snap-start flex-col items-center justify-center p-4"
	>
		<h2 class="text-2xl font-bold">Posts</h2>
		<ul class="w-full max-w-xl">
			{#each data.posts as { slug, title, description }}
				<li class="mt-2">
					<a href="/posts/{slug}" class="font-bold">{title}</a>
					<p class="text-stone-600 dark:text-stone-400">{description}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>
