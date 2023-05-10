<article>
	<h3>
		<slot name="heading" />
	</h3>
	<p class="desc">
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
	}
</style>
