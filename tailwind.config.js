/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E242F",
        secondary: "#1D242C",
        tertiary: "#161E25",
        text: "#324F5C",
        textAccent: "#A5C4D6",
        accent: "#FAC81B",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #022c57",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
