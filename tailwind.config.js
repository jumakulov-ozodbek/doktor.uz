/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Roboto"'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/img/BG.svg')",
      },
      colors: {
        primary: '#EDF2F7',

      },
    },
  },
  plugins: [],
}
