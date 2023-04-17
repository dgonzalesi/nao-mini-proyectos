/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './*.html',
    './src/*.jsx',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        brightRed: '#FF0000'
      }
    },
    plugins: []
  }
}
