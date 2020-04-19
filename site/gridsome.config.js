const path = require("path");

module.exports = {
  siteName: "ElkeDotCodes",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "BlogPost",
        baseDir: "./content/blogposts",
        template: "./src/templates/BlogPost.vue",
        route: "/blog/:slug"
      }
    }
  ],
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve("../ada/node_modules/vue")
      }
    }
  }
};
