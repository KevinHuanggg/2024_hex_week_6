/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    extend: {
      colors: {
        'accent': {
          'ligjt': '#ffffff',
          DEFAULT: '#569573',
          'dark': '', 
        },
        'gray': {
          DEFAULT: '#343A40',
        }
      },

      fontSize: {
        xs: ["0.75rem", "1.5"],
        sm: ["0.875rem", "1.5"],
        base: ["1rem", "1.5"],
        lg: ["1.125rem", "1.5"],
        xl: ["1.25rem", "1.5"],
        "2xl": ["1.5rem", "1.5"],
        "3xl": ["1.875rem", "1.5"],
        "4xl": ["2.25rem", "1.5"],
        "5xl": ["3rem", "1.5"],
        "6xl": ["3.75rem", "1.5"],
        "7xl": ["4.5rem", "1.5"],
        "8xl": ["6rem", "1.5"],
        "9xl": ["8rem", "1.5"],
      },
    },
    
    container: {
      center: true,
      padding: '12px',
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
