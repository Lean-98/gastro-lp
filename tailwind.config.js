/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#42032C',
        },
        secondary: {
          DEFAULT: '#D36B00',
        },
        accent: {
          DEFAULT: '#E6D2AA',
        },
        light: {
          DEFAULT: '#F1EFDC',
        },
      },
    },
  },
  plugins: [],
};
