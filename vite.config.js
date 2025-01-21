import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shadesofgreen/',
  server: {
    cors: true, // Ensure Cross-Origin Resource Sharing is allowed
  },
})
