module.exports = {
  content: ["*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      roboto: ["Roboto", "ui-sans-serif", "system-ui"],
      robotoSlab: ["Roboto Slab", "serif"],
      musticaPro: ["Mustica-Pro", "geometric-sans-serif",],
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
