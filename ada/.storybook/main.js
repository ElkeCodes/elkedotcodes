module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default .css rule.
          ...config.module.rules.filter(rule => /\.css$/ !== rule.test),
          // Add our own css rule which in turn will read the postcss.config.js from project root.
          {
            test: /\.scss$/,
            exclude: [/\.module\.css$/, /@storybook/],
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1, sourceMap: false }
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  sourceMap: false
                }
              }
            ]
          }
        ]
      }
    };
  }
};
