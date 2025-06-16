const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: ['react-native-reanimated/plugin'],
  overrides: [
    {
      test: [
        path.resolve(__dirname, '../../packages/react-native-ficus-ui/src'),
        path.resolve(__dirname, '../../node_modules/react-native'),
      ],
      presets: ['next/babel'],
    },
  ],
};
