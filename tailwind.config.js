const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#1E1E1E',
        'white': '#BEBEBE'
      },
      fontFamily: {
        display: ['var(--font-PPEditorialOld)', ...fontFamily.serif],
        mono: ['var(--font-SuisseIntlMono)', ...fontFamily.mono],
        serif: ['var(--font-MigraExtralight)', ...fontFamily.serif]
      },
    },
  },
  plugins: []
}