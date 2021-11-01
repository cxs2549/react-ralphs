module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandDark: '#404042'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
