const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Bebas Neue', ...fontFamily.sans],
        sans: ['var(--font-bebas)', ...fontFamily.sans],
        classic: ['Roboto', 'Arial'],
      },
      animation: {
        showmenu: 'showmenu 0.3s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        // showmenu: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity: 1 },
        // },
        showmenu: {
          '0%': { left: '-100vw' },
          '100%': { left: '0' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
