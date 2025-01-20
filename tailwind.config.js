/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add jsx, ts, tsx extensions
    "./index.html"  // Include your index.html file
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightGray: "#f3f3f2",
        mediumGray: "#afafac",
        darkGray: "#4a4a45",
        blue: "#0000ee",
        grayText: "#444444",
        darkText: "#2a2a28",
        black: "#000000",
        lightgreen: '#90EE90',
      }
    },
  },
  plugins: [],
}
