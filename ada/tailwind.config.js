const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          ligther: colors.teal[500],
          default: colors.teal[700],
          darker: colors.teal[900]
        },
        secondary: colors.yellow,
        neutral: colors.gray[700]
      }
    }
  }
};