import { dev } from '$app/environment'

// Enable CSR on dev for hot-reloading.
// eslint-disable-next-line unicorn/prefer-export-from
export const csr = dev
export const prerender = true
export const trailingSlash = 'always'
