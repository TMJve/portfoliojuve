/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bebas Neue', 'sans-serif'], // Use Bebas Neue for titles
        body: ['Titillium Web', 'sans-serif'], // Use Titillium Web for body text
        code: ['Source Code Pro', 'monospace'], // For code elements
      },
    },
  },
  plugins: [],
}