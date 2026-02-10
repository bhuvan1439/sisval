/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ffd1dc', // Soft pink
          red: '#ff4d4d',   // Deep red
        }
      },
      fontFamily: {
        'pacifico': ['"Pacifico"', 'cursive'],
        'sans': ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

