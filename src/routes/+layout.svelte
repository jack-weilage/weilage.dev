<script lang="ts">
	import '../app.css'

	import { inject } from '@vercel/analytics'
	import { page } from '$app/stores'

	inject()

	const header_links: {
		href: '/' | `/${string}/`
		title: string
	}[] = [
		{
			href: '/',
			title: 'Home',
		},
		{
			href: '/blog/',
			title: 'Blog',
		},
		{
			href: '/resume/',
			title: 'Resume',
		},
	]
</script>

<header>
	<a class="skip" href="#main-content">Skip to main content</a>
	<nav>
		{#each header_links as { href, title }}
			{@const is_current = $page.url.pathname === href}
			<a
				{href}
				aria-current={is_current ? 'page' : undefined}
				aria-disabled={is_current ? 'true' : undefined}
				tabindex={is_current ? -1 : undefined}
			>
				{title}
			</a>
		{/each}
	</nav>
</header>

<slot />

<style lang="postcss">
	header {
		/* Keep the header at the top of the page. */
		position: fixed;
		top: 0;
		right: 0;
		left: 0;

		/* Make the header see-through but still clearly visible. */
		background-color: var(--color--background-trans);
		backdrop-filter: saturate(180%) blur(5px);

		@media print {
			/* Should some branding remain when printing? */
			display: none;
		}
		& > a.skip {
			/* Place the skip-to link just above the page, so it can drop down when focused. */
			position: absolute;
			transform: translate(1rem, -100%);

			/* If the screen is too small (<250px), the text will start wrapping without changing the outer element. */
			/* This forces the element to resize with the text. */
			max-width: calc(100vw - 2rem);

			padding: 1rem;
			background-color: var(--color--background-alt);

			border-radius: 0.5rem;

			transition: transform 0.15s ease-out;

			&:focus {
				/* Move the link into view */
				transform: translate(1rem, 1rem);
			}
		}
		& > nav {
			/* Navigation items should be placed at the end of the screen. */
			max-width: 35%;
			margin-inline-start: auto;
			/* Grid is used here to keep all items the same size. */
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 1fr;

			gap: 1.25rem;

			padding: 1.5rem;

			@media (width <= 850px) {
				/* When the screen shrinks, the items should be centered. */
				margin-inline-start: 0;
				max-width: 100%;
				justify-content: center;
			}
			& > a {
				line-height: 1;

				padding: 0.75rem 1rem;

				text-align: center;
				font-size: 0.9em;

				background-color: var(--color--background);

				--border-color: transparent;
				border: 2px solid var(--border-color);
				border-radius: 0.5rem;

				/* If we're currently on the page corresponding to this link, mark it as inaccessible. */
				&[aria-current='page'] {
					--border-color: var(--color--text-alt);

					color: var(--color--text-alt);
				}
				&:hover,
				&:focus {
					--border-color: var(--color--blue);

					text-decoration: none;
				}
			}
		}
	}
</style>
