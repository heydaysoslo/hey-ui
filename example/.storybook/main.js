const path = require('path')
module.exports = {
  stories: ['../../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-toolbars',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-theme-playground'
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': path.resolve('./node_modules', 'styled-components')
    }
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
