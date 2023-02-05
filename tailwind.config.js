/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Caveat: ["Caveat"],
      Poppins: ["Poppins"],
    },
    extend: {
      colors: {
        color_primary: "#ab49f7",
        color_primary_op: "#ce5edbbf",
        light: "#fff",
        lighttext: "hsl(236, 33%, 92%)",
        darkbg: "hsl(235, 21%, 11%)",
        darktext: "hsl(235, 24%, 19%)",
        darktext2: "hsl(235, 21%, 11%)",
      },
    },
  },
  plugins: [],
};
