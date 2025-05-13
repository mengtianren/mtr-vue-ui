import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(),
    dts({
      tsconfigPath: 'tsconfig.json',
      insertTypesEntry: true, // 自动在 index.d.ts 中添加 export
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url)),
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: 'packages/index.ts',
      name: 'gc-ui',
      fileName: (format) => `gc-ui.${format}.js`,
      cssFileName:"gc-ui"
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue','lodash-es',"less"],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'AntDesignVue',
          "lodash-es":"LodashEs"
        }
      }
    }
  }
})
