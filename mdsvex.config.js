//@ts-expect-error
import remark_abbr from 'remark-abbr'

import rehype_slug from 'rehype-slug'
import rehype_autolink_headings from 'rehype-autolink-headings'

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
    extensions: [ '.md' ],
    smartypants: true,

    remarkPlugins: [ remark_abbr ],
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
        ]
    ]
}

export default config