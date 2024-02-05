<script>
	import { balance } from '$lib/balance'
</script>

<article>
	<h3>
		<slot name="heading" />
	</h3>
	<p class="desc" use:balance>
		<slot />
	</p>
</article>

<style lang="postcss">
	article {
		& > h3 {
			margin: 0 0 0.25rem;
		}
		& > p.desc {
			margin: 0;
			font-size: 0.9em;
		}
		/* When text is balanced, it'll leave a gap if text-align: flex-end is used. */
		&:nth-child(even) > p.desc {
			margin-inline-start: auto;
		}
	}
</style>
