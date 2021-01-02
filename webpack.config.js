const path = require('path');
//const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    index: './src/index.ts',
    server: './src/server.ts',
  },
  target: 'node',
  mode: 'none',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.ts']
  },
  externals: {
    'coc.nvim': 'commonjs coc.nvim',
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  plugins: [
    //new CopyPlugin({
    //patterns: [
    //{from: 'dist/server.js', to: 'server.js'},
    //],
    //}),
  ],
  node: {
    __dirname: false,
    __filename: false
  }
};
