module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@ficus-ui/style-system$': '<rootDir>/packages/style-system/src',
    '^@ficus-ui/theme$': '<rootDir>/packages/theme/src',
    '^@test-utils$': '<rootDir>/packages/components/src/test-utils',
  },
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
