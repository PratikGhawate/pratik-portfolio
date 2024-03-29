/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar'),],
}

