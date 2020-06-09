const path = require("path");

module.exports = {
  siteName: "ElkeDotCodes",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blogposts/**/*.md",
        remark: {
          plugins: [
            ["remark-codesandbox", { mode: "button" }],
            "@gridsome/remark-prismjs",
          ]
        }
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:slug"
  },
  icon: {
    favicon: "./src/assets/favicon.png"
  }
};
