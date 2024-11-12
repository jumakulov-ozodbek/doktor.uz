/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
<<<<<<< HEAD
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Roboto"'],
    },
    extend: {},
=======
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/img/BG.svg')",
      },
    },
>>>>>>> e4447615142f352e8579b0c00d0f9457a118cdbd
  },
  plugins: [],
}