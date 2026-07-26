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
          paper: '#FBF3E6',
        ink: '#1B2A4A',
        turquoise: '#178E82',
        poppy: '#E4572E',
        gold: '#F2A93B',
        lilac: '#8B6FB3',
        coral: '#F2637B',
        sky: '#3A86C8',
        moss: '#5B8C5A',
        plum: '#8E4B6E',
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