const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    postcss: false
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['~'] = path.resolve(__dirname, '../src')

    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre'
    })

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // additionalData: `
            //   @import "quasar/dist/quasar.css";
            //   @import "@quasar/extras/roboto-font/roboto-font.css";
            //   @import "@quasar/extras/material-icons/material-icons.css";
            //   @import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
            // `
          }
        }
      ]
    })

    // Return the altered config
    return config
  }
}
