import {
    defineConfig,
    globalIgnores,
} from 'eslint/config'

import globals from 'globals'

import {
    fixupConfigRules,
} from '@eslint/compat'

import tsParser from '@typescript-eslint/parser'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'

import {
    FlatCompat,
} from '@eslint/eslintrc'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,

        parserOptions: {
            project: ['tsconfig.json', 'tsconfig.node.json'],
        },
    },

    extends: fixupConfigRules(compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    )),

    plugins: {
        'react-refresh': reactRefresh,
        '@stylistic': stylistic,
    },

    rules: {
        'react-refresh/only-export-components': ['warn', {
            allowConstantExport: true,
        }],

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
            version: 'detect',
        },
    },
}, globalIgnores(['**/dist', '**/eslint.config.js', '**/lighthouserc.cjs', '**/*.html', '**/coverage'])])
