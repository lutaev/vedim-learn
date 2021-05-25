const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withPlugins = require('next-compose-plugins');

const DotEnv = require('dotenv-webpack');

const patchWebpackConfig = (config) => {
  const configOptions = new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, './jsconfig.json'),
  });

  if (config.resolve.plugins) {
    config.resolve.plugins.push(configOptions);
  } else {
    config.resolve.plugins = [configOptions];
  }

  config.plugins = [
    ...config.plugins,

    // Read the .env file
    new DotEnv(),
  ];

  return config;
};

module.exports = withPlugins([], { webpack: patchWebpackConfig });
