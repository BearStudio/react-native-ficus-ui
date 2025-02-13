module.exports = {
  preset: 'react-native',
  modulePaths: ['./src'],
  transformIgnorePatterns: ['node_modules/(?!.*react-native).*'],
  testPathIgnorePatterns: [
    '/lib/typescript/.*\\.test\\.d\\.ts$',
    '/src/.*\\.test\\.d\\.ts$',
    '/src/.*\\.test\\.ts$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
