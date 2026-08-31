import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ou vue, selon ton framework

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'kams-business.duckdns.org',
      'localhost',
      '192.168.127.137'
    ]
  }
})