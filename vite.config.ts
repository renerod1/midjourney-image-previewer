import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        additionalPrerenderRoutes: ['/404'],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: '/404',
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
