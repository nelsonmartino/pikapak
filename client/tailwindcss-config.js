/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../client/src/assets/Background_header.png')",
      },
      backgroundColor: {
        'my-custom-color': '#FFBA00',
      },
      fontFamily: {

        gibson: ['gibson', 'serif'],
        nova: ['proxima-nova', 'sans-serif'],

      },
    },
  },
  plugins: [],
})
