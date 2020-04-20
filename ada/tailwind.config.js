const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          ligther: "#FF662E",
          default: "#F74F14",
          darker: "AB3307"
        },
        secondary: {
          lighter: "#14F7CA",
          default: "#00AB89",
          darker: "#007A62"
        },
        neutral: colors.gray[700]
      }
    }
  }
};
