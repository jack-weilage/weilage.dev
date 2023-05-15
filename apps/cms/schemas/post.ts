import type { SchemaTypeDefinition } from 'sanity'

export const post = {
	name: 'post',
	type: 'document',
	title: 'Blog Post',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required(),
		},
	],
} satisfies SchemaTypeDefinition
