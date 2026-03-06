/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'; // require yerine import kullanıyoruz

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          primary: '#4F46E5', // Indigo 600
          secondary: '#10B981', // Emerald 500
          light: '#F8FAFC',
        }
      },
      // Typography için marka renklerini buraya bağlayabiliriz (Opsiyonel ama şıktır)
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.brand.primary'),
              '&:hover': {
                color: theme('colors.indigo.700'),
              },
            },
            h1: { color: theme('colors.brand.dark') },
            h2: { color: theme('colors.brand.dark') },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
}