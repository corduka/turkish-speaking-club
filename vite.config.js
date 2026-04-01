import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://turkishspeakingclub.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/materials',
        '/how-it-works',
        '/private',
        '/membership',
        '/faq',
        '/terms-and-privacy',
        '/blog',
        // Blog yazıları buraya dinamik gelmeli (Aşağıya bak)
      ] 
    }),
  ],
})