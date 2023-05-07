import custom_config from 'svelte-config-custom'

// eslint-disable-next-line unicorn/prevent-abbreviations
const is_dev = process.env['NODE_ENV'] === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		...custom_config.kit,
		csp: {
			directives: {
				'default-src': ['self'],
				'script-src': is_dev ? ['unsafe-inline', 'self'] : undefined,
				'style-src': is_dev ? ['unsafe-inline', 'self'] : undefined,
			},
			mode: 'auto',
		},
		prerender: {
			origin: 'https://weilage.dev',
		},
	},
	preprocess: [...custom_config.preprocess],
}

export default config
