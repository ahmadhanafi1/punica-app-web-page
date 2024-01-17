/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      background: "#BEBAAECC",
      gray: "#474747",
      primary: "#8D0000",
      primaryLight: "#FDE3E3",
      Text: "#D9D9D9",
      lightText: "#9A9EA6",
      blackText: "#040815",
      
    },
    screens: {
      'xs' : "520px",
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl': '1400px',
      "3xl": '1536px',
    }
  },
  
  plugins: [],
}