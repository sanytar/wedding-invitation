/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{vue,js,ts,md}',           // всё в проекте, включая компоненты, страницы, MD
    '!./node_modules',                // исключаем node_modules
    '!./dist',                        // исключаем билд
    '!./.vitepress/cache'            // и кеш
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        white: '#FFFFFF',
        gray: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A0A0A0',
          500: '#888888',
          600: '#666666',
          700: '#555555',
          800: '#333333',
          900: '#1A1A1A',
        },
        // Акценты — если решишь добавить (можно отключить)
        gold: '#D4AF37',
        champagne: '#EFE1C6',
        blush: '#FADADD',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}