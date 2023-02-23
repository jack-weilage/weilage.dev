import type { PostData } from '!types'

import MarkdownIt   from 'markdown-it'

import front_matter from 'markdown-it-front-matter'
import shiki        from 'markdown-it-shiki'
import footnote     from 'markdown-it-footnote'
import abbr         from 'markdown-it-abbr'

import YAML from 'yaml'

import { filename } from '$lib/utils'

// For some reason, there's no way for `markdown-it-front-matter` to return the front-matter, 
// so it must be collected in the arrow function and stored here.
let fm: Record<string, any>
const md = new MarkdownIt({ typographer: true })
    .use(front_matter, yaml => fm = YAML.parse(yaml))
    .use(shiki, { theme: 'github-dark' })
    .use(footnote)
    .use(abbr)

export const posts: PostData[] = Object.entries(import.meta.glob('./content/*.md', { eager: true, as: 'raw' }))
    .map(([ path, content ]) => ({
        html:           md.render(content),
        slug:           filename(path).replace(/\s/g, '-'),
        title:          fm.title       ?? 'Unknown Title',
        description:    fm.description ?? 'Unknown Description',
        date:           +new Date(fm.date),
        read_time:      Math.ceil(content.split(/\s/).filter(Boolean).length / 200)
    }))
    .sort((a, b) => b.date - a.date)