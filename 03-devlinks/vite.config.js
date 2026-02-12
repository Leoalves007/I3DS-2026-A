import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,             // Muda porta padrão vite(5173)para o padrão react(3000)
    open: true,            // Abre o navegador automaticamente
    host: true,           // Permite acesso via IP na rede local
  },
})
