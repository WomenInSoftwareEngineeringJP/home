import { defineConfig, mergeConfig } from 'vite';

import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            coverage: {
                provider: 'istanbul',
                enabled: true,
                reporter: ['text', 'json', 'html'],
                extension: ['.ts', '.tsx'],
                all: true,
                include: ['src/**'],
                exclude: ['src/tests/**', 'src/main.tsx'],
                watermarks: {
                    statements: [60, 80],
                    functions: [60, 80],
                    branches: [60, 80],
                    lines: [60, 80],
                },
            },
            environment: 'jsdom',
            setupFiles: ['./src/tests/setup.ts'],
            exclude: ['node_modules/**', 'e2e/**', 'dist/**'],
        },
    })
);
