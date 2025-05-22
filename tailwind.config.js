/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A78BFA', // Light purple
        background: '#0F172A', // Dark background
      }
    },
  },
  plugins: [],
}
