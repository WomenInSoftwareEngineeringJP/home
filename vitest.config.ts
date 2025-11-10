/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    test: {
        coverage: {
            provider: 'v8',
            enabled: true,
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: ['src/tests/**', 'src/main.tsx'],
            watermarks: {
                statements: [60, 80],
                functions: [60, 80],
                branches: [60, 80],
                lines: [60, 80]
            }
        },
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts'],
        exclude: ['node_modules/**', 'e2e/**', 'dist/**']
    }
})
