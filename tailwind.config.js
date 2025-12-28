/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-erbaum-black)"],
        body: ["var(--font-erbaum-regular)"],
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
