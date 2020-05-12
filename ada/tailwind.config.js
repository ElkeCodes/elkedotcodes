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
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"]
  }
};
