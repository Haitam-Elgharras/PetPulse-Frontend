/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "!./src/app/navbar/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

