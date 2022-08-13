import type { RequestHandler } from '@sveltejs/kit/types'

export const GET: RequestHandler = ({ url }) => ({ body: { url: `${url.protocol}//${url.host}${url.pathname}` } })