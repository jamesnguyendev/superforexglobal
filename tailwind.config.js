/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 100s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-150px * 5))",
          },
        },
      },
      colors: {
        primary: "#3ECF8E",
        default: "#35465B",
        grey: "#4A596C",
        input: "#f1f4f7",
        light_grey: "#9aa3ad",
      },
      backgroundImage: {
        "custom-not-found":
          "url('https://ik.imagekit.io/kn40ppx9b/Superforex/bg.svg?updatedAt=1733816881336')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
