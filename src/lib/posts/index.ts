import type { Heading, PostData, ViteGlobImport } from '!types'

import { browser } from '$app/environment'
import { basename } from 'path'
import { parse } from 'node-html-parser'

if (browser)
    throw new Error('Posts cannot be accessed from browser.')

export const posts: PostData[] = Object.entries(import.meta.glob('./content/**/*.md', { eager: true }) as ViteGlobImport)
    .map(([ path, content ]) => {
        // Create a slug
        const slug = basename(path)
            .replace('.md', '')
            .replace(/\s/g, '-')
        
        const $ = parse(content.default.render().html)

        // Get the text of the whole document (this won't include title or other metadata).
        const wordcount = $.structuredText
            .split(' ')
            .filter(Boolean)
            .length
        
        const meta = content.metadata
        return {
            slug,
            draft:        !!meta.draft,
            title:        meta.title       as string    ?? 'Unknown Title',
            description:  meta.description as string    ?? 'Unknown Description',
            date:         meta.date        as string    ?? '1970-01-01',
            wordcount,
            tags:         meta.tags        as string[]  ?? [],
            headings:     meta.headings    as Heading[] ?? []
        } as PostData
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))

export const posts_no_drafts = posts
    .filter(post => !post.draft)