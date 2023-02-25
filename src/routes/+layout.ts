import { dev } from '$app/environment'

// Enable CSR on dev for hot-reloading.
export const csr = dev
export const prerender = true
export const trailingSlash = 'always'