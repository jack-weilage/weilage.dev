<script lang="ts">
	export let location: string
	export let position: string | undefined = undefined
	export let href: string | undefined = undefined

	export let start: Date | undefined = undefined
	export let end: Date | undefined = undefined
</script>

<div class="break-inside-avoid">
	<div class="flex items-center justify-between gap-x-4">
		<h3 class="text-xl font-bold">
			{#if href}
				<a {href}>{location}</a>
			{:else}
				{location}
			{/if}
			{#if position}
				- {position}
			{/if}
		</h3>
		{#if start}
			<p class="italic text-stone-600 dark:text-stone-400">
				{start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
				-
				{#if end}
					{end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
				{:else}
					Present
				{/if}
			</p>
		{/if}
	</div>
	<ul
		class="flex list-disc flex-col gap-y-2 text-stone-700 dark:text-stone-300"
	>
		<slot />
	</ul>
</div>
