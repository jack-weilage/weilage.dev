import { DateTime } from 'luxon'

export interface Metadata {
    title: string
    description: string

    date_published: string
    date_modified: string

    tags: string[]
    draft?: boolean
}
export interface ParsedMetadata {
    title: string
    description: string

    date_published: DateTime
    date_modified: DateTime

    tags: string[]
    draft?: boolean
}

export const parse = ({ 
    title = 'Unknown Title', description = 'Unknown Description', 
    date_published = '', date_modified = '', 
    tags = [], 
    draft = false
}: Metadata): ParsedMetadata => ({ 
    title, description, 
    date_published: DateTime.fromISO(date_published), 
    date_modified: DateTime.fromISO(date_modified), 
    tags,
    draft
})