/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    extend:{
      display:['group-hover'],
      visibility:['group-hover']
    }
  },
  theme: {
    screens:{
      xxl: '1536px'
    },
    // container:{
    //  center:true,
    //  padding:'1rem'
    // },
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

