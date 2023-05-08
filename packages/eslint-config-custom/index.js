/* eslint-disable quotes, comma-dangle, sort-keys, max-len */
const config = {
	plugins: ['@typescript-eslint', 'unicorn'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		emcaVersion: 2020,
		extraFileExtensions: '*.svelte',
	},
	env: {
		node: true,
		browser: true,
		es2017: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	extends: [
		'plugin:svelte/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
		'turbo',
		'prettier',
	],
	rules: {
		'svelte/valid-compile': 'off',
		'unicorn/filename-case': 'off',
		'svelte/no-at-html-tags': 'off',
		'unicorn/no-useless-undefined': 'off',
	},
}

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config
