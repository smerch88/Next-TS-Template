/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {},
      colors: {
        dark: '#0F1C26',
        primary: '#094079',
        hover: '#0A5ADF',
        secondary: '#00d4ff',
        gray_light: '#5C666F',
        white_light: '#F8F8F8',
        red: '#f43f5e',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};
