/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add jsx, ts, tsx extensions
    "./index.html"  // Include your index.html file
  ],
  theme: {
    extend: {

      playfair: ['Playfair Display', 'serif'],
      suranna: ['Suranna', 'serif'],
    },
  },
  plugins: [],
}
