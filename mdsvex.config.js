//@ts-expect-error
import remark_abbr from 'remark-abbr'
import remark_headings from '@vcarl/remark-headings'

import rehype_slug from 'rehype-slug'
import rehype_autolink_headings from 'rehype-autolink-headings'

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
    extensions: [ '.md' ],
    smartypants: true,

    remarkPlugins: [ 
        remark_abbr,
        headings
    ],
    rehypePlugins: [
        //@ts-expect-error
        rehype_slug,
        [
            //@ts-expect-error
            rehype_autolink_headings, 
            { 
                properties: { class: 'heading-link', ariaHidden: true, tabIndex: -1 },
                content: { type: 'text', value: '#' }
            }
        ],
    ]
}

export default config

// Shamelessly stolen from https://github.com/mattjennings/sveltekit-blog-template/blob/4c9524defc619196e4f9cca83799d9e79a5d4a30/mdsvex.config.js#L51-L67
function headings() {
    return function transformer(tree, vfile) {
      // run remark-headings plugin
      remark_headings()(tree, vfile)
  
      // include the headings data in mdsvex frontmatter
      vfile.data.fm ??= {}
      vfile.data.fm.headings = vfile.data.headings.map((heading) => ({
            ...heading,
            // slugify heading.value
            id: heading.value
                .toLowerCase()
                .replace(/\s/g, '-')
                .replace(/[^a-z0-9-]/g, '')
        }))
    }
}