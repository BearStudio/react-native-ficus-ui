const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: ['react-native-reanimated/plugin'],
  overrides: [
    {
      test: [
        path.resolve(__dirname, '../../package/src'),
        path.resolve(__dirname, '../../node_modules/react-native'),
      ],
      presets: ['next/babel'],
    },
  ],
};
