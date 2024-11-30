/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text:{
          "heading-main":"#2E2F33",
          "heading-secondary":"#FFFFFF",
          "heading-brand":"#7C71DF",
          "body":"#2E2F33",
          "body-sub":"#5F6980",
          "nav-links":"#55575F"
        },
        background:{
          "primary":"#FFFFFF",
          "secondary":"#F8F7FB",
          "tertiary":"#897FE1",
          "tertiary-black":"#101010",
        },
        buttons:{
          "primary":"#7C71DF",
          "secondary":"#F8F7FB",
          "tertiary":"#686A74"
        }
      },
    },
  },
  plugins: [],
};
