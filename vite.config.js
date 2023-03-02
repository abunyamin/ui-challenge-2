import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/ui-challenge-2/', // activated this if you want to deploy to github page, value of this property is depending your respository.

  build: {
    assetsDir: 'assets', // This is Asset folder for your image etc.
    assetsInlineLimit: 0,
    sourcemap: false,
  },
});
