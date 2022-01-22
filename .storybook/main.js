// TODO: https://github.com/storybookjs/storybook/issues/11146

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../src/assets"],
  webpackFinal: async (config) => {
    const babelPresets = config.module.rules[0].use[0].options.presets;

    config.module.rules[0].use.push({
      loader: require.resolve("@linaria/webpack-loader"),
      options: {
        babelOptions: {
          presets: [
            babelPresets[1],
            babelPresets[2],
            [
              "@linaria",
              {
                evaluate: true,
                displayName: process.env.NODE_ENV !== "production",
                sourceMap: process.env.NODE_ENV !== "production",
                extension: ".linaria.module.css",
              },
            ],
          ],
        },
      },
    });

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    return config;
  },
};
