import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/quiz-app/',
  plugins: [react()],
  server: {
    hmr: true
  }
})
