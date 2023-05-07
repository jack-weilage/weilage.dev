/* eslint-disable quotes, comma-dangle, sort-keys, max-len */
const config = {
	plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
	reportDescriptionlessDisables: true,
	reportNeedlessDisables: true,
	overrides: [
		{
			files: ['*.svelte', '**/*.svelte'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		'plugin/no-unsupported-browser-features': [
			true,
			{ ignorePartialSupport: true },
		],
		'order/order': ['custom-properties', 'declarations', 'at-rules', 'rules'],
		'order/properties-order': [
			'z-index',
			'position',
			'transform',
			'translate',
			'width',
			'max-width',
			'min-width',
			'height',
			'max-height',
			'min-height',
			'display',
			'align-items',
			'align-content',
			'justify-items',
			'justify-content',
			'flex-wrap',
			'flex-direction',
			'flex-flow',
			'gap',
			'row-gap',
			'column-gap',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'font',
			'font-family',
			'font-size',
			'font-weight',
			'font-style',
			'line-height',
			'color',
			'filter',
			'background-color',
			'backdrop-filter',
			'border-radius',
			'border-radius-top-left',
			'border-radius-top-right',
			'border-radius-bottom-right',
			'border-radius-bottom-left',
			'border',
			'border-top',
			'border-right',
			'border-bottom',
			'border-left',
		],

		'no-descending-specificity': true,

		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
			},
		],
		'font-family-no-duplicate-names': true,
		'keyframe-block-no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,

		'block-no-empty': true,
		'comment-no-empty': true,

		'color-no-invalid-hex': true,
		'function-calc-no-unspaced-operator': true,
		'keyframe-declaration-no-important': true,
		'named-grid-areas-no-invalid': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'string-no-newline': true,

		'no-irregular-whitespace': true,

		'custom-property-no-missing-var-function': true,
		'font-family-no-missing-generic-family-keyword': true,

		'function-linear-gradient-no-nonstandard-direction': true,

		'declaration-block-no-shorthand-property-overrides': true,

		'annotation-no-unknown': true,
		'at-rule-no-unknown': true,
		'declaration-property-value-no-unknown': true,
		'function-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'no-unknown-animations': true,
		'property-no-unknown': true,
		'selector-pseudo-class-no-unknown': [
			true,
			{ ignorePseudoClasses: ['global'] },
		],
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'unit-no-unknown': true,

		'at-rule-no-vendor-prefix': true,

		'length-zero-no-unit': true,

		'media-feature-name-no-vendor-prefix': true,

		'property-no-vendor-prefix': true,

		'function-name-case': 'lower',
		'selector-type-case': 'lower',

		'alpha-value-notation': 'number',
		'font-weight-notation': 'numeric',
		'import-notation': 'string',
		'media-feature-range-notation': 'context',

		'function-url-quotes': 'always',
		'selector-attribute-quotes': 'always',

		'declaration-block-no-redundant-longhand-properties': true,
		'shorthand-property-no-redundant-values': true,
	},
}
/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config
