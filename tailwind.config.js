/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#8B4513',
          600: '#654321',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      scale: {
        '102': '1.02',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};