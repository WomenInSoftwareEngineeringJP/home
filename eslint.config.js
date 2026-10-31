import {
    defineConfig,
    globalIgnores,
} from 'eslint/config'

import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactHooks from 'eslint-plugin-react-hooks'
import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import tseslint from 'typescript-eslint'

export default defineConfig(
    globalIgnores(['**/dist', '**/eslint.config.js', '**/lighthouserc.cjs', '**/*.html', '**/coverage']),
    {
        files: ['**/*.{ts,tsx}'],

        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            eslintReact.configs['recommended-type-checked'],
            reactHooks.configs.flat.recommended,
        ],

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tseslint.parser,

        parserOptions: {
            project: ['tsconfig.json', 'tsconfig.node.json'],
        },
    },

    plugins: {
            '@eslint-react': eslintReact,
        'react-refresh': reactRefresh,
        '@stylistic': stylistic,
    },

    rules: {
            // This was enabled by the legacy React preset but is absent from the new Hooks preset.
            'react-hooks/component-hook-factories': 'error',

        'react-refresh/only-export-components': ['warn', {
            allowConstantExport: true,
        }],

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
})
