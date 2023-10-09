import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        target: 'es2015',
        lib: {
            name: 'ikpumxik',
            entry: './src/lib/index.ts',
            formats: ['es', 'cjs', 'umd', 'iife']
        }
    }
})
