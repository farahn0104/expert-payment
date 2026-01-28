/* tailwind.config.js */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#00CFB4',
        secondary: '#2F2F2F',
        accent: '#00346F',
      },
      width: {
        '56%': '56%',
        '44%': '44%',
      },
      margin: {
        '44%': '44%',
      },
    },
  },
  plugins: [],
}