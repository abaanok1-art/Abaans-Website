import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const index = path.resolve('dist/index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.resolve('dist/404.html'))
      }
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), spaFallback()],
})
