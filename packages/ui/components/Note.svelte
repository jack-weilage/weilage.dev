<script lang="ts">
	import { Info } from 'lucide-svelte'
</script>

<div>
	<Info size="20px" />
	<p>
		<strong>Note: </strong>
		<slot />
	</p>
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: 3rem 1fr;
		align-items: center;

		margin: 2rem 0;
		padding: 1rem;

		background-color: var(--color--background-alt);

		border-radius: 0.25rem;
		border: 1px solid var(--color--border);
		border-left: 5px solid var(--color--anchor);

		& > :global(svg) {
			color: var(--color--anchor);
		}
		& > p {
			margin: 0;
		}
	}
</style>
