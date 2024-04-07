<script lang="ts">
	import '../app.css'

	import { inject } from '@vercel/analytics'
	import { page } from '$app/stores'

	inject()
</script>

{#if $page.url.pathname !== '/'}
	<header class="sticky top-0 bg-white p-2 dark:bg-black">
		<div class="flex items-center gap-x-2">
			<a href="/" class="p-2 text-lg font-bold">Jack Weilage</a>
			<!-- {#each $page.url.href.split('/').slice(2, -2) as part, i} -->
			<!-- 	{#if part.startsWith('weilage') || part.startsWith('localhost')} -->
			<!-- 		<a href="/" class="text-lg font-bold">Jack Weilage</a> -->
			<!-- 	{:else} -->
			<!-- 		<span class="text-stone-700">/</span> -->
			<!-- 		<a href={'../'.repeat(i + 1) + part + '/'} class="text-lg"> -->
			<!-- 			TODO: This breaks if the part is more than one word -->
			<!-- 			{part[0].toUpperCase() + part.slice(1)} -->
			<!-- 		</a> -->
			<!-- 	{/if} -->
			<!-- {/each} -->
		</div>
	</header>
{/if}

<slot />
