import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/provider-directory/',
  server: { port: 5177, strictPort: true }
})