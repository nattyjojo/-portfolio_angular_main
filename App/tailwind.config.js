/** @type {import('../tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3e00ce", // Primary color for header and footer
        secondary: "#1976d2",
        unigue: "#303030",
        "button-bg": "#4c2aff", // Button background color
        "button-text": "#ffffff", // Button text color
        "button-hover": "#ffffff26", // Button hover color
        "main-bg": "#f8f8f8", // Main page background color
        "main-text": "#f8f8f8", // Main page text color
        text: "#333333", // Text color
        link: "#007bff", // Link color
        "link-hover": "#0056b3", // Link hover color
        accent1: "#ff7f00", // Accent color 1
        accent2: "#34bf49", // Accent color 2
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Default sans-serif font
        serif: ["Merriweather", "serif"], // Default serif font
        display: ["Montserrat", "sans-serif"], // Font for headings
        body: ["Open Sans", "sans-serif"], // Font for body text
      },

      // padding: {
      //   xs: "0.25rem", // Extra Small
      //   sm: "0.5rem", // Small
      //   base: "1rem", // Base
      //   lg: "1.5rem", // Large
      //   xl: "2rem", // Extra Large
      //   "2xl": "3rem", // 2 Extra Large
      // },
      // margin: {
      //   xs: "0.25rem", // Extra Small
      //   sm: "0.5rem", // Small
      //   base: "1rem", // Base
      //   lg: "1.5rem", // Large
      //   xl: "2rem", // Extra Large
      //   "2xl": "3rem", // 2 Extra Large
      // },
      // lineHeight: {
      //   none: "1", // No additional line height
      //   tight: "1.25", // Tight line height
      //   normal: "1.5", // Normal line height
      //   relaxed: "1.75", // Relaxed line height
      //   loose: "2", // Loose line height
      // },
      // spacing: {
      //   px: "1px", // 1 pixel
      //   0: "0", // No spacing
      //   1: "0.25rem", // 0.25 rem
      //   2: "0.5rem", // 0.5 rem
      //   3: "0.75rem", // 0.75 rem
      //   4: "1rem", // 1 rem
      //   5: "1.25rem", // 1.25 rem
      //   6: "1.5rem", // 1.5 rem
      //   8: "2rem", // 2 rem
      //   10: "2.5rem", // 2.5 rem
      //   12: "3rem", // 3 rem
      //   16: "4rem", // 4 rem
      //   20: "5rem", // 5 rem
      //   24: "6rem", // 6 rem
      //   32: "8rem", // 8 rem
      //   40: "10rem", // 10 rem
      //   48: "12rem", // 12 rem
      //   56: "14rem", // 14 rem
      //   64: "16rem", // 16 rem
      // },
      // borderRadius: {
      //   none: "0", // No border radius
      //   sm: "0.125rem", // Small border radius
      //   base: "0.25rem", // Base border radius
      //   lg: "0.5rem", // Large border radius
      //   xl: "1rem", // Extra large border radius
      //   "2xl": "2rem", // 2 Extra large border radius
      //   full: "9999px", // Full border radius
      // },
      // screens: {
      //   sm: "640px", // Small screen
      //   md: "768px", // Medium screen
      //   lg: "1024px", // Large screen
      //   xl: "1280px", // Extra large screen
      // },
    },
  },
  variants: {},
  plugins: [
    // Add the plugin for Google Fonts here
    require("@tailwindcss/typography"), // Optional: For improved typography defaults
    require("@tailwindcss/forms"), // Optional: For form styling
  ],
};
