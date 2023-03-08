/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  important: true,
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#942F70",
        "secondary-yellow": "#FEF452",
        "dark-blue": "#14597A",
        "light-purple": "#F9F5FF",
        "light-black": "#333333",
        "light-gray": "#F2F4F7",
      },
    },
  },
  plugins: [],
});
