/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'white': '#fff',
        'dark-cyan': 'hsl(192, 100%, 9%)',
        'blue': 'hsl(207, 100%, 98%)',
      },
      backgroundImage: {
        'top-section-1': "url('../images/bg-section-top-desktop-1.svg')",
        'top-section-2': "url('../images/bg-section-top-desktop-2.svg')",
        'footer': "url('../images/bg-footer-top-desktop.svg')",
      },
    },
  },
  plugins: [],
}