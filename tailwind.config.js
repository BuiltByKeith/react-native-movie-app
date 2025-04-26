/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        accent: "#AB8BFF",
        light: {
          100: "#D6C7FF",
          200: "#A8B%DB",
          300: "#9CA4Ab",
        },
        dark: {
          100: '#221F4D',
          200: "#0F0D23",
        },
        // neutral: "#374151",
        // "base-100": "#FFFFFF",
        // info: "#3ABFF8",
        // success: "#36D399",
        // warning: "#FBBD23",
        // error: "#F87272",
      }
    },
  },
  plugins: [],
}

