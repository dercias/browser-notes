/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B71CA',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    margin: ['first'],
    borderRadius: ['first', 'last'],
  },
};
