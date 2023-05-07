<script lang="ts">
	import { Link } from 'ui'

	export let post: {
		title: string
		slug: string
		description: string

		read_time: number
		created_at: string
	}

	const created_at = new Date(post.created_at).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	})
</script>

<article>
	<div class="title">
		<h2>
			<Link href="/blog/{post.slug}/">
				{post.title}
			</Link>
		</h2>
		<p>{post.description}</p>
	</div>
	<div class="info">
		<p>{created_at}</p>
		<p>{post.read_time} minute read</p>
	</div>
</article>

<style lang="postcss">
	article {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		gap: 1rem;

		@media (width <= 550px) {
			&:nth-child(even) {
				text-align: end;

				& > div.info {
					align-items: flex-end;
				}
			}
		}
		& p {
			margin: 0;

			font-size: 0.8em;
			color: var(--color--text-alt);
		}
		& > div.title {
			@media (width <= 550px) {
				width: 100%;
			}
			& > h2 {
				margin: 0;
			}
		}
		& > div.info {
			display: flex;
			align-items: flex-end;
			flex-direction: column;

			@media (width <= 550px) {
				width: 100%;

				align-items: flex-start;
			}
		}
	}
</style>
