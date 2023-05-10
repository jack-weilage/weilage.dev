<script lang="ts">
	export let start: string | undefined = undefined
	export let end: string | undefined = undefined
	export let position: string | undefined = undefined

	export let id: number
</script>

<article class:swap-side={id % 2 === 1}>
	<div class="heading-block">
		<h3>
			<slot name="heading" />
			{#if position}
				<span>{position}</span>
			{/if}
		</h3>
		{#if start}
			<p class="duration">
				{new Date(start).toLocaleDateString('en-US', {
					month: 'short',
					year: 'numeric',
				})}
				-
				{#if end}
					{new Date(end).toLocaleDateString('en-US', {
						month: 'short',
						year: 'numeric',
					})}
				{:else}
					Present
				{/if}
			</p>
		{/if}
	</div>
	<p class="desc">
		<slot />
	</p>
</article>

<style lang="postcss">
	article {
		/* Add a margin to the top of every non-first element. */
		&:not(:first-of-type) {
			margin-top: 3.5rem;

			@media print {
				margin-top: 0.5rem;
			}
		}
		& > div.heading-block {
			display: flex;
			align-items: center;
			flex-direction: column;

			@media print {
				justify-content: space-between;
				flex-direction: row;
			}
			& > h3 {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 0 1.5rem;

				margin: 0 0 0.25rem;

				& > span {
					font-weight: 300;
				}
			}
			& > p.duration {
				margin: 0 0 1rem;

				font-size: 0.85em;
				font-weight: 300;
				font-style: italic;

				color: var(--color--text-alt);

				@media print {
					margin-bottom: 0.25rem;
				}
			}
		}
		& > p.desc {
			margin: 0;
			font-size: 0.9em;
		}
	}
</style>
