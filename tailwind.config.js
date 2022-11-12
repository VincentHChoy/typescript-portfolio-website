/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Comfortaa', cursive",
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      colors: {
        primary: "#533C78",
        secondary: "#674584",
        third: "#AB5182",
        accent: "#36294D",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.5s ease-out",
      },
    },
  },
  plugins: [],
};
