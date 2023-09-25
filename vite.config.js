import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    }
  },
  //Document Picture-in-Picture API only works on HTTPS
  server: {
    https: true,
  },
  plugins: [react(), mkcert()],
})
