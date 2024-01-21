import { defineConfig } from "vite"; // node_modules/vite/index.cjsのdefineConfigの内容を上書きする?
import { resolve } from 'path'

export default defineConfig({
    root: resolve('./frontend/src'),
    base: '/static/',
    server: {
        host: 'localhost',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    build: {
        outDir: resolve('./frontend/dist'),
        emptyOutDir: true,
        assetsDir: '',
        manifest: 'manifest.json',
        rollupOptions: {
            input: [
                resolve('./frontend/src/js/app.js'),
            ],
            output: {
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
                      return 'images/[name]-[hash].[ext]';
                    }
                    if (/\.css$/.test(assetInfo.name)) {
                      return 'css/[name]-[hash].[ext]';
                    }
                    return '[name]-[hash].[ext]';
                },
            }
        },
    },
});
