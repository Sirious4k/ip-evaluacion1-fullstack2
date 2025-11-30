import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
    ],

    server: env.VITE_API_URL
      ? {
          proxy: {
            '/api': {
              target: env.VITE_API_URL,
              changeOrigin: true,
            },
          },
        }
      : undefined,

    build: {
      rollupOptions: {
        external: [/tests/]
      }
    }

  }
})
