module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
};
