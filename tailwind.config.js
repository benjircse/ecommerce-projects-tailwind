/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    container:{
     center:true,
     padding:'1rem'
    },
    extend: {
      fontFamily:{
        poppins:'"Poppins", sans-serif',
        roboto:'"Roboto", sans-serif'
      },

      colors:{
        'primary':'#FD3D57'
      }

    },
  },
  plugins: [],
}

