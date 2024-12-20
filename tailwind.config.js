/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '0px', 'max': '700px' },
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

