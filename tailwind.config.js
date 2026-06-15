/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display"],
        body: ["Source Serif 4"],
        mono: ["IBM Plex Mono"]
      }
    }
  },

  plugins: []
}