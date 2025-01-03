/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:'5%'
    },
    extend: {
      fontFamily:{
        'lato' : ["Lato", 'sans-serif'],
        'josef' : ["Josefin Sans", 'sans-serif']
      },
       backgroundImage: {
        'hero-pattern': "url('./public/Rectangle 102.png')",
        
      }
    },
  },
  plugins: [],
}