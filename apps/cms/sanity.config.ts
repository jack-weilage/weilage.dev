import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
	name: 'default',
	title: 'weilage.dev',

	projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
