import { VITE_SANITY_PROJECT_ID } from '$env/static/private'
import { createClient } from '@sanity/client'
import { makeSafeQueryRunner } from 'groqd'

const client = createClient({
	projectId: VITE_SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-05-13',
})

export const sanity = makeSafeQueryRunner((query) => client.fetch(query))
