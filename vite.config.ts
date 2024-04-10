import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    visualizer(),
    viteCompression({
      verbose: true, // 输出压缩成功
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于阈值会被压缩，单位是b
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: true // 是否删除原文件
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-common-lib': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  },
  server: {
    host: true,
    open: true,
    port: 8000
  }
})
