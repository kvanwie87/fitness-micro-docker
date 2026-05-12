import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker to expose the port
    port: 5173,
    watch: {
       usePolling: true, // Sometimes needed for HMR on Windows/macOS
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
