import { dev } from '$app/environment'

export interface PostMetadata {
	uploaded_at: string
	updated_at?: string
	title: string
	description: string
	published?: boolean
}
interface ImportMetaDefault {
	render(): string
	$$render(): string
}

export const posts = Object.entries(
	import.meta.glob<{
		metadata: PostMetadata
		default: ImportMetaDefault
	}>('./*/post.svelte.md', { eager: true }),
)
	// If we're in dev mode, it's ok to display non-published posts
	.filter(([, post]) => post.metadata.published || dev)
	.map(([path, post]) => ({
		slug: path.split('/').at(-2) ?? 'unknown',
		content: post.default.$$render(),
		metadata: {
			title: post.metadata.published
				? post.metadata.title
				: `PRIVATE: ${post.metadata.title}`,
			description: post.metadata.description,
			uploaded_at: new Date(post.metadata.uploaded_at),
			updated_at: new Date(
				post.metadata.updated_at ?? post.metadata.uploaded_at,
			),
		},
	}))
	.sort((a, b) => +b.metadata.updated_at - +a.metadata.updated_at)
