import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages部署的基础路径，需要根据实际仓库名称修改
  base: '/personal-blog/',
})