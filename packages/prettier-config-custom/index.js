/* eslint-disable quotes, comma-dangle, sort-keys, max-len */
const config = {
	trailingComma: 'all',
	semi: false,
	singleQuote: true,
	useTabs: true,

	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config
