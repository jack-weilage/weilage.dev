<script lang="ts">
	export let grid = false
	export let heading = false
</script>

<section>
	<slot name="title" />
	{#if heading}
		<slot />
	{:else}
		<div class:grid>
			<slot />
		</div>
	{/if}
</section>

<style lang="postcss">
	section {
		break-inside: avoid;

		& > :global(h2) {
			display: flex;
			align-items: center;

			gap: 1.5rem;

			margin: 5rem 0 1rem;

			& > :global(svg) {
				width: 1.1em;
				height: 1.1em;
			}
			@media not print {
				font-size: 1.85em;
			}
			@media print {
				margin: 1.5rem 0 0.75rem;
				padding: 0 0 0.25rem;
				text-align: start;

				border-block-end: 2px solid var(--color--border);
			}
		}
		& > div {
			@media not print {
				padding: 1.5rem;

				background-color: var(--color--background-alt);

				border-radius: 1rem;
				border: 2px solid transparent;
				transition: border-color 0.25s;
			}
			&:hover {
				border-color: var(--color--blue);
			}
			&.grid {
				display: grid;
				grid-template-columns: 1fr 1fr;

				gap: 1rem 2rem;

				@media (width <= 550px) {
					grid-template-columns: 1fr;
				}
				& > :nth-child(even) {
					text-align: end;
				}
			}
		}
	}
</style>
