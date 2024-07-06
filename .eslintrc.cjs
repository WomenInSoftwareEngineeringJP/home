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
        '@stylistic/ts'
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
        '@stylistic/ts/indent': ['error', 4],
    },
    overrides: [
        {
            // disable `any` checks in tests
            files: ['src/**/*.test.{ts,tsx}'],
            rules: {
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect'
        },
    }
}
