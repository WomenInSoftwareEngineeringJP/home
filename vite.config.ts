/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: '', // local
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
    }

    // gh-pages
    if (command !== 'serve') {
        config.base = '/home/'
    }

    return config
})
