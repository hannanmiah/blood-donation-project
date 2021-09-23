module.exports = {
  mode: 'jit',
  purge: ['./pages/*.{js,jsx,ts,tsx,vue}', './components/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#EA0000',
        secondary: '#F25D5D',
        'primary-text': 'white',
        'secondary-text': '#515162'
      },
      zIndex: {
        '-1':'-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
