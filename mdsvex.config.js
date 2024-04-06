import { defineMDSveXConfig } from 'mdsvex'

// Remark plugins
import relativeImages from 'mdsvex-relative-images'
import unwrapImages from 'remark-unwrap-images'
// Rehype plugins

const config = defineMDSveXConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: './src/routes/posts/[slug=slugged]/MdsvexLayout.svelte',

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [unwrapImages, relativeImages],
	rehypePlugins: [],
})

export default config
