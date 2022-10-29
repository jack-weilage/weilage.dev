import { dev } from '$app/environment'

//TODO: The back-forward cache seems to break when CSR is enabled and CSS is global.
export const csr = false
export const prerender = true