import { SchemaTypeDefinition } from 'sanity'

export default {
	name: 'post',
	type: 'document',
	title: 'Blog Post',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required().unique(),
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Uploaded At',
			name: 'uploaded_at',
			type: 'date',
			initialValue: () => new Date().toISOString().slice(0, 10),
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required().unique(),
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
