/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: {
          main: 'var(--bg-main)',
          soft: 'var(--bg-soft)',
          dark: 'var(--bg-dark)',
        },

        TX: {
          main: 'var(--text-main)',
          soft: 'var(--text-soft)',
          dark: 'var(--text-dark)',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '95%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
};
