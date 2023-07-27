<script lang="ts">
	import { page } from '$app/stores'

	import { Link, SEO } from 'ui'
</script>

<SEO
	title="Error {$page.status}: {$page.error?.message ?? 'Unknown Error'}"
	description="An error occurred while loading this page."
	robots={{ noarchive: true, noindex: true }}
/>

<main id="main-content">
	<h1>
		Error {$page.status}: {$page.error?.message ?? 'Unknown Error'}
	</h1>
	{#if $page.status === 404}
		<p>
			Looks like you've navigated to a page that doesn't exist! If you were sent
			here from a link on my site,
			<Link href="https://github.com/jack-weilage/weilage-dev/issues">
				create an issue on my GitHub
			</Link>.
		</p>
		<p>
			If you were sent here by a link from somewhere else, I've likely updated
			my URL style or removed this page.
		</p>
	{:else if $page.status === 401}
		<p>You're not supposed to be here.</p>
	{:else}
		<p>
			An error has occured. Try waiting a little while, then retry your request.
		</p>
		<p>
			If this error consistently ocurrs,
			<Link href="https://github.com/jack-weilage/weilage-dev/issues">
				create an issue on my GitHub
			</Link>.
		</p>
	{/if}
</main>

<style lang="postcss">
	main {
		max-width: 45rem;
		margin: 8rem auto 0;

		padding: 2rem;

		text-align: center;
	}
</style>
