module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#FF662E",
          default: "#F74F14",
          darker: "#AB3307"
        },
        secondary: {
          lighter: "#14F7CA",
          default: "#00AB89",
          darker: "#007A62"
        },
        gray: {
          darker: "#212121",
          default: "#3B3B3B",
          lighter: "#555555"
        }
      }
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', "Roboto", "Arial", "sans-serif"],
      serif: [
        "Martel",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ],
      heading: [
        "Montserat",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ]
    },
    fontSize: {
      tiny: ".875rem",
      base: "1.125rem",
      lg: "1.250rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
      "3xl": "2rem",
      "4xl": "2.375rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"]
  }
};
