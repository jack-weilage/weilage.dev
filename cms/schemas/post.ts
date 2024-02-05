import { defineArrayMember, defineField, defineType } from 'sanity'

export const post = defineType({
	name: 'post',
	type: 'document',
	title: 'Blog Post',
	fields: [
		defineField({
			title: 'Title',
			description:
				'The title of the post, displayed on the blog and social media.',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Description',
			description:
				'The description of the post, displayed on the blog and social media.',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Slug',
			description: 'The "slug" of the post (the unique url identifier)',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Content',
			description: 'The main content of the post, displayed on the blog.',
			name: 'content',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
				}),
				defineArrayMember({
					type: 'code',
				}),
				defineArrayMember({
					type: 'image',
					options: {
						hotspot: true,
						metadata: ['lqip'],
					},
					fields: [
						defineField({
							type: 'text',
							name: 'alt',
							title: 'Alternative Text',
						}),
					],
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
	],
})
