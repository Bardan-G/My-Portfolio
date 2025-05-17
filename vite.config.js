import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { rect } from 'motion/react-client'
import path from 'path'



// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // if your source files are in 'src'
    },
  },
})
