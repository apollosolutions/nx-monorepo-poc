const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/react-monorepo-relay'),
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new NxAppWebpackPlugin({
      main: './src/app/page.tsx',
      tsConfig: './tsconfig.json',
      index: './src/app/page.tsx',
      styles: ['./src/app/global.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
  ],
};
