/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        primary :"#f5efe1",
      },
        fontFamily: {
          built: ['built', 'sans-serif'], // Add your custom font here
          alfa: ['Alpha', 'sans-serif'],     
          Verna: ['Verna', 'sans'],     
           },
           
    },
  },
  plugins: [],
}