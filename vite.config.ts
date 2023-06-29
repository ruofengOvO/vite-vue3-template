import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  base: './', // 设置打包路径
  server: {
    port: 4000,
    open: true,
    cors: true
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vue3-components-lib',
      fileName: format => `vue3-components-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
