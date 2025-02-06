/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        102: '1.02',  // Custom scale of 125%
        175: '1.75',  // Custom scale of 175%
      },
      animation: {
        "loop-scroll": "loop-scroll 5s linear infinite",
        "shake": 'shake 1s infinite',
      },
      fontFamily: {
        custom: ["Montserrat", "serif"],
        luckiest: ["Luckiest Guy", "serif"]


      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0deg)' },
          '35%': { transform: 'rotate(0deg)' },
          '45%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '55%': { transform: 'rotate(-10deg)' },
          '65%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(0deg)' },
          '85%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
