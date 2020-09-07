const path = require('path');

module.exports = {
  // Tell webpack the environment we are bundling for
  target: 'node',
  // Tell webpack where to begin the bundling i.e the root of our application
  entry: './src/index.js',
  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // Tell webpack to run babel on all our files
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]],
      },
    }],
  },
};
