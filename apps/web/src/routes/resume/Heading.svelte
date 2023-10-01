<script lang="ts">
	import { Github, Mail } from 'lucide-svelte'
	import { Link } from 'ui'
</script>

<div class="heading">
	<slot name="heading">
		<h1>Lorem Ipsum</h1>
	</slot>
	<slot name="contact-list">
		<ul>
			<li>
				<Mail aria-hidden="true" size="16px" />
				<Link href="mailto:jack@weilage.dev">jack@weilage.dev</Link>
			</li>
			<li>
				<Github aria-hidden="true" size="16px" />
				<Link href="https://github.com/jack-weilage">@jack-weilage</Link>
			</li>
		</ul>
	</slot>
	<slot name="description">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate
			maiores id ad alias sint hic ab incidunt quos corrupti laborum aut, amet
			molestias minima ea eius commodi consequatur fugiat. Lorem ipsum dolor
			sit, amet consectetur adipisicing elit.
		</p>
	</slot>
	<slot name="image">
		<picture>
			<source srcset="/images/pfp.webp" type="image/webp" />
			<img src="/images/pfp.jpg" alt="" />
		</picture>
	</slot>
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-areas:
			'title pfp'
			'list  pfp'
			'desc  pfp';
		align-items: center;

		gap: 0.25rem 1rem;

		@media (width <= 675px) {
			grid-template-areas:
				'title pfp'
				'list  pfp'
				'desc  desc';
		}
		@media (width <= 500px) {
			text-align: center;

			grid-template-areas:
				'title'
				'list'
				'pfp'
				'desc';
		}
		@media (width <= 500px) {
			gap: 1rem;
		}
		& > :global(h1) {
			grid-area: title;

			margin: 0;
			font-size: 2.5em;
		}
		& > :global(ul) {
			grid-area: list;
			list-style: none;

			display: grid;
			grid-template-columns: 1fr 1fr;

			gap: 1rem;

			margin: 0 0 auto;
			padding: 0;

			@media (width <= 675px) and (width > 500px) {
				grid-template-columns: 1fr;
			}
			@media (width <= 450px) {
				grid-template-columns: 1fr;
				justify-items: center;

				gap: 0.5rem;
			}
			@media print {
				gap: 0.35rem;
			}
			& > :global(li) {
				display: flex;
				align-items: center;
				gap: 1rem;

				font-size: 0.8em;

				@media print {
					gap: 0.35rem;
				}
			}
		}
		& > :global(p) {
			grid-area: desc;

			margin: 0;
			font-size: 0.85em;
		}
		& > :global(picture) {
			grid-area: pfp;

			aspect-ratio: 320 / 342;

			min-width: 8rem;
			max-height: 13.5rem;

			margin: 0 auto;

			@media print {
				width: 10rem;
			}
			/* TODO: Fix CLS issues (why...) */
			& > :global(img) {
				border-radius: 1.5rem;
			}
		}
	}
</style>
