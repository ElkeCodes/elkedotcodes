module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/**/*.{ts,js,vue}",
    "!**/node_modules/**",
    "!**/stories/**",
    "!**/coverage/**",
    "!**/**.config.{ts,js}",
    "!**/{main,lib}.ts"
  ],
  coverageReporters: ["html", "text-summary"]
};
