module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'lighthouserc.cjs', '*.html'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"]
    },
    plugins: [
        'react-refresh',
        '@stylistic'
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 'off',
        'quotes': ['error', 'single'],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-unsafe-call': ['off'],
        '@stylistic/indent': ['error', 4],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
    },
    settings: {
        react: {
            version: 'detect'
        },
    }
}
