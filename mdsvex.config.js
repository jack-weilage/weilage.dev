import { defineMDSveXConfig } from 'mdsvex'

// Remark plugins
import relativeImages from 'mdsvex-relative-images'
import unwrapImages from 'remark-unwrap-images'
// Rehype plugins

const config = defineMDSveXConfig({
	extensions: ['.md'],

	layout: './src/lib/components/mdsvex/Layout.svelte',

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [unwrapImages, relativeImages],
	rehypePlugins: [],
})

export default config
