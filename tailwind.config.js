/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#0C0C09",
        lead: { DEFAULT: "#1467E1", dark: "#1444D1" },
        light: { DEFAULT: "#D4D4D5", 200: "#A1A1AA", 300: "#71717A" },
        disabled: { DEFAULT: "#767676", dark: "#333333" },
      },
      backgroundColor: {
        light: "#FAFAFA",
        dark: "#18181B",
        darker: "#09090B",
      },
    },
  },
  plugins: [],
};
