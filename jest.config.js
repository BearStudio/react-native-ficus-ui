module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-native-reanimated' +
      '|@react-navigation' +
      '|react-native-toast-message' +
      '|react-native-confirmation-code-field' +
      '|react-native-picker-select' +
      '|react-native-tab-view' +
      '|react-native-vector-icons' +
      '|@gorhom/bottom-sheet' +
      '|react-native-gesture-handler' +
      ')/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
};
