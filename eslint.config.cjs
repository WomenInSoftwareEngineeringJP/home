const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");

const {
    fixupConfigRules,
} = require("@eslint/compat");

const tsParser = require("@typescript-eslint/parser");
const reactRefresh = require("eslint-plugin-react-refresh");
const stylistic = require("@stylistic/eslint-plugin");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,

        parserOptions: {
            project: ["tsconfig.json", "tsconfig.node.json"],
        },
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    )),

    plugins: {
        "react-refresh": reactRefresh,
        "@stylistic": stylistic,
    },

    rules: {
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        "react/react-in-jsx-scope": "off",
        "quotes": ["error", "single"],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-unsafe-call": ["off"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/semi": ["error", "never"],
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/no-mixed-spaces-and-tabs": "error",
        "@typescript-eslint/no-explicit-any": "error",
    },

    settings: {
        react: {
            version: "detect",
        },
    },
}, globalIgnores(["**/dist", "**/eslint.config.cjs", "**/lighthouserc.cjs", "**/*.html", "**/coverage"])]);
