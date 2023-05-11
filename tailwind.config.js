/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#4A1961",
        "purple-main": "#6450F8",
      },
    },
  },
  plugins: [require("daisyui")],
};
