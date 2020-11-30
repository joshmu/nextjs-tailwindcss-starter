const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{ts,tsx, js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        themeText: "var(--text)",
        themeBg: "var(--background)",
        themeAccent: "var(--accent)",
      },
      maxHeight: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },
    },
  },
  variants: {},
  plugins:
    process.env.NODE_ENV === "production"
      ? // production
        []
      : // development
        [require("tailwindcss-debug-screens")],
};
