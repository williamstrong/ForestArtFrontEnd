const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './src/browser/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader!awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [browserConfig, serverConfig];
