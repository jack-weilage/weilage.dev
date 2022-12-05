import { dev } from '$app/environment'

//TODO: The back-forward cache seems to break when CSR is enabled and CSS is global.
export const csr = false
//TODO: Pages seem to be ignored by vercel if prerendered. ????
export const prerender = false

export const trailingSlash = 'always'