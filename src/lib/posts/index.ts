import type { PostData } from '!types'

import MarkdownIt   from 'markdown-it'

import abbr         from 'markdown-it-abbr'
import footnote     from 'markdown-it-footnote'
import front_matter from 'markdown-it-front-matter'
import shiki        from 'markdown-it-shiki'

import YAML from 'yaml'

import { filename } from '$lib/utils'

// For some reason, there's no way for `markdown-it-front-matter` to return the front-matter...
// ... so it must be collected in the arrow function and stored here.
let fm: Record<string, string>
const md = new MarkdownIt({ typographer: true })
    .use(front_matter, yaml => (fm = YAML.parse(yaml)))
    .use(shiki, { theme: 'github-dark' })
    .use(footnote)
    .use(abbr)

export const posts: PostData[] = Object.entries(import.meta.glob(
    './content/*.md',
    { as: 'raw', eager: true },
))
    .map(([ path, content ]) => ({
        html:           md.render(content),
        read_time:      Math.ceil(content.split(/\s/).filter(Boolean).length / 200),
        slug:           filename(path).replace(/\s/g, '-'),

        date:           +new Date(fm.date),
        description:    fm.description ?? 'Unknown Description',
        title:          fm.title       ?? 'Unknown Title',
    }))
    .sort((a, b) => b.date - a.date)
