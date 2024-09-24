/** @type {import('tailwindcss').Config} */
export default {
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
        serif: ["gibson", "serif"],
        sans: ["proxima-nova", "sans-serif"],
      },
    },
  },
  plugins: [],
}
