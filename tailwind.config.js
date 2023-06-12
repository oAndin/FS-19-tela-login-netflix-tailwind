/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-netflix': "url('https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/6231a476-40df-4892-912b-63bc4e0d9601/BR-pt-20230605-popsignuptwoweeks-perspective_alpha_website_medium.jpg')"
      },
      spacing: {
        quadrado:'450px',
        retangulo:'550px'
      }
    },
  },
  plugins: [],
}