import { defineConfig } from 'vite'
import fs from 'fs'

export default defineConfig({
    //define: { global: {} },
    base: '',
    build: {
        minify: false,
        sourcemap: true
    },
    define: {
        'process.env': {},
        // 'global.window': 'window'
        // global: {}
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis'
            }
        }
    },
    server: {
        port: 8000,
        https: {
            key: fs.readFileSync('./certs/key.pem'),
            cert: fs.readFileSync('./certs/certificate.pem'),
        },
    },
})