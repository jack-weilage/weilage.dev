/* eslint-disable quotes, comma-dangle, sort-keys, max-len */
const config = {
    "plugins": [
        "@typescript-eslint",
        "unicorn"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "extraFileExtensions": "*.svelte"
    },
    "env": {
        "node": true,
        "browser": true
    },
    "overrides": [
        {
            "files": [ "*.svelte" ],
            "parser": "svelte-eslint-parser",
            "parserOptions": { "parser": "@typescript-eslint/parser" },
            "rules": {
                "indent": "off"
            }
        }
    ],
    "extends": [
        "plugin:svelte/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "turbo"
    ],
    "rules": {
        // `eslint-plugin-svelte`

        // Possible errors.
        "svelte/infinite-reactive-loop": "error",
        "svelte/no-dupe-on-directives": "error",
        "svelte/no-export-load-in-svelte-module-in-kit-pages": "warn",
        "svelte/no-store-async": "warn",
        "svelte/require-store-callbacks-use-set-param": "warn",
        "svelte/valid-compile": "off",
        // Security vulnerabilites.
        "svelte/no-at-html-tags": "off",
        // Best practices.
        "svelte/button-has-type": "warn",
        "svelte/no-useless-mustaches": "warn",
        // "svelte/prefer-destructured-store-props": "warn",
        "svelte/require-optimized-style-attribute": "warn",
        "svelte/require-stores-init": "warn",
        // Stylistic issues.
        "svelte/first-attribute-linebreak": "warn",
        "svelte/html-closing-bracket-spacing": "warn",
        "svelte/html-self-closing": [
            "warn",
            {
                "void": "never",
                "normal": "always",
                "component": "always",
                "svelte": "always"
            }
        ],
        "svelte/indent": [ "error", { "indent": 4 } ],
        "svelte/mustache-spacing": "warn",
        "svelte/no-extra-reactive-curlies": "warn",
        "svelte/no-spaces-around-equal-signs-in-attribute": "warn",
        "svelte/prefer-class-directive": "warn",
        "svelte/prefer-style-directive": "warn",
        "svelte/shorthand-attribute": "warn",
        "svelte/shorthand-directive": "warn",
        "svelte/spaced-html-comment": "warn",
        // Extension rules.
        "svelte/no-trailing-spaces": "warn",

        // `eslint-plugin-unicorn`
        "unicorn/filename-case": "off",
        "unicorn/no-useless-undefined": "off",


        // ESLint main.

        // Possible problems.
        "no-constant-condition": "error",
        "no-duplicate-imports": "error",
        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable-loop": "error",
        "no-use-before-define": "error",
        "require-atomic-updates": "error",
        // Suggestions.
        "capitalized-comments": "warn",
        "complexity": "warn",
        "consistent-this": [ "warn", "self" ],
        "curly": [ "warn", "multi-or-nest" ],
        "default-case": "warn",
        "default-case-last": "warn",
        "default-param-last": "warn",
        "eqeqeq": "error",
        "logical-assignment-operators": "error",
        "max-depth": [ "warn", 5 ],
        "new-cap": "warn",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-delete-var": "error",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-floating-decimal": "warn",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-lone-blocks": "warn",
        "no-lonely-if": "warn",
        "no-mixed-operators": "warn",
        "no-multi-assign": "warn",
        "no-multi-str": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-sequences": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-concat": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": "warn",
        "one-var-declaration-per-line": [ "warn", "always" ],
        "operator-assignment": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "error",
        "prefer-destructuring": "warn",
        "prefer-exponentiation-operator": "warn",
        "prefer-object-has-own": "warn",
        "prefer-object-spread": "warn",
        "prefer-promise-reject-errors": [ "error", { "allowEmptyReject": true } ],
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "require-await": "warn",
        "sort-imports": [ "warn", { "allowSeparatedGroups": true } ],
        "sort-keys": [ "warn", "asc", { "allowLineSeparatedGroups": true } ],
        "spaced-comment": "warn",
        "symbol-description": "error",
        "yoda": "warn",
        // Layout and formatting.
        "array-bracket-spacing": [ "warn", "always" ],
        "block-spacing": "warn",
        "brace-style": [ "warn", "allman" ],
        "comma-dangle": [ "warn", "always-multiline" ],
        "comma-spacing": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        "dot-location": [ "warn", "property" ],
        "eol-last": "error",
        "func-call-spacing": "warn",
        "function-paren-newline": "warn",
        "generator-star-spacing": [ "warn", "after" ],
        "indent": [ "error", 4 ],
        "max-len": [ "warn", { "code": 110 } ],
        "max-statements-per-line": [ "warn", { "max": 2 } ],
        "multiline-ternary": [ "warn", "always-multiline" ],
        "new-parens": "warn",
        "newline-per-chained-call": "warn",
        "no-tabs": "warn",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": [ "warn", "below" ],
        "object-curly-spacing": [ "warn", "always" ],
        "padded-blocks": [ "warn", "never" ],
        "padding-line-between-statements": [ "warn", { "blankLine": "always", "prev": "*", "next": "return" } ],
        "quotes": [ "warn", "single", { "allowTemplateLiterals": true } ],
        "rest-spread-spacing": "warn",
        "semi": [ "warn", "never" ],
        "semi-spacing": "warn",
        "semi-style": [ "warn", "first" ],
        "space-before-function-paren": [ "warn", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        } ],
        "space-in-parens": "warn",
        "space-unary-ops": "warn",
        "switch-colon-spacing": "warn",
        "template-curly-spacing": "warn",
        "template-tag-spacing": "warn",
        "unicode-bom": "warn",
        "wrap-iife": "warn",
        "yield-star-spacing": "warn"
    }
}

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config
