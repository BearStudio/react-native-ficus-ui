module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*react-native).*'],
  testPathIgnorePatterns: [
    'lib/typescript/.*\\.test\\.d\\.ts$',
    'src/.*\\.test\\.d\\.ts$',
    'src/.*\\.test\\.ts$',
    '<rootDir>/packages/.*/lib/.*',
    '<rootDir>/packages/.*/dist/.*',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
