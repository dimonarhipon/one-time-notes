module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react-refresh"],
	rules: {
		"no-console": "error",
		quotes: ["error", "single"],
		"jsx-quotes": ["error", "prefer-single"],
		"react-refresh/only-export-components": "warn",
		"@typescript-eslint/no-unused-vars": ["warn"],
		"react-hooks/rules-of-hooks": "error",
		"@typescript-eslint/no-use-before-define": ["error"],
		"@typescript-eslint/semi": ["error"],
		"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "function", next: "*" },
			{ blankLine: "always", prev: "*", next: "function" },
			{ blankLine: "any", prev: "function", next: "function" },
		],
	},
};
