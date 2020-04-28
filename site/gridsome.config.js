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
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:slug",
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve("../ada/node_modules/vue")
      }
    }
  }
};
