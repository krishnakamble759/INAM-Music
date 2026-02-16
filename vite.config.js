
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './',
  root: '.',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 3000,
    hot: true
  }
})
