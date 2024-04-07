<script lang="ts">
	import { page } from '$app/stores'

	import SEO from '$lib/components/SEO.svelte'
</script>

<SEO
	title="Error {$page.status}: {$page.error?.message ?? 'Unknown Error'}"
	description="An error occurred while loading this page."
	robots={{ noarchive: true, noindex: true }}
/>

<main
	class="mx-auto mt-12 flex max-w-2xl flex-col items-center p-4 text-stone-700 dark:text-stone-300"
>
	<h1 class="text-2xl font-bold text-black dark:text-white">
		{$page.status}: {$page.error?.message ?? 'Unknown Error'}
	</h1>
	{#if $page.status === 404}
		<p class="mb-2">
			Looks like you've navigated to a page that doesn't exist! If you were sent
			here from a link on my site,
			<a
				href="https://github.com/jack-weilage/weilage-dev/issues"
				class="font-bold"
			>
				create an issue on my GitHub
			</a>.
		</p>
		<p>
			If you were sent here by a link from somewhere else, I've likely updated
			my URL scheme or removed this content.
		</p>
	{:else if $page.status === 401}
		<p>You're not supposed to be here.</p>
	{:else}
		<p class="mb-2">
			An error has occured. Try waiting a little while, then retry your request.
		</p>
		<p>
			If this error consistently ocurrs,
			<a
				href="https://github.com/jack-weilage/weilage-dev/issues"
				class="font-bold"
			>
				create an issue on my GitHub
			</a>.
		</p>
	{/if}
</main>
