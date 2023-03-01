import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  server: {
    // Menonaktifkan Permissions Policy header
    host: '0.0.0.0',
    fs: {
      strict: false
    }
  },
  build: {
    // Menambahkan public URL ke output build Anda
    base: '/ay-challenge-2/'
  }
}

