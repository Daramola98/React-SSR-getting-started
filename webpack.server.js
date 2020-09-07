const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
  // Tell webpack the environment we are bundling for
  target: 'node',
  // Tell webpack where to begin the bundling i.e the root of our application
  entry: './src/index.js',
  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
