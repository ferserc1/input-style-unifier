import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        lib: {
            entry: "./js/main.js",
            name: "input-style-unifier"
        },
        rollupOptions: {
            output: {
                assetFileNames: 'input-style-unifier.css',
            }
        }
    }
});