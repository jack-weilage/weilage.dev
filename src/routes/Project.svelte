<script lang="ts">
	import Github from 'lucide-svelte/icons/github'
	import Globe from 'lucide-svelte/icons/globe'

	export let name: string
	export let href: string
</script>

<li class="mt-2">
	<a {href} class="flex items-center gap-x-2 font-bold">
		{#if href.startsWith('https://github.com')}
			<Github aria-label="Github logo" />
		{:else}
			<Globe aria-label="Globe icon" />
		{/if}
		{name}
	</a>
	<p class="text-stone-600 dark:text-stone-400">
		<slot />
	</p>
</li>
