import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { rect } from 'motion/react-client'
import path from 'path'



// https://vite.dev/config/
export default {
  base:'/',
  plugins: [tailwindcss(),react()],
 
}
