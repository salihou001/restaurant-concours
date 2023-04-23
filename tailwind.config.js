/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#2979FF",
          zozor: "#00c9ff"
        }
      }
    },
    fontFamily: {
      Nunito: ["Nunito"]
    }
  },
  plugins: [require('flowbite/plugin')],
}

