const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const pak = require('./package.json');

const config = getDefaultConfig(__dirname);

const root = path.resolve(__dirname, '../../package/src');

const modules = [
  '@expo/vector-icons',
  ...Object.keys(pak.peerDependencies ?? {}),
];

// 🔁 Use `blockList` instead of deprecated `blacklistRE`
config.resolver.blockList = exclusionList([
  // Block test files
  new RegExp(`${escape(root)}.*\\.(spec|test)\\.[jt]sx?$`),

  // Block @testing-library/react-native from node_modules
  new RegExp(
    `${escape(
      path.resolve(__dirname, '../../node_modules/@testing-library/react-native')
    )}\\/.*`
  ),
  new RegExp(
    `${escape(
      path.resolve(__dirname, '../../package/src/test-utils')
    )}\\/.*`
  ),
]);

config.watchFolders = [root];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(root, 'node_modules'),
];

// Prevent multiple versions of peerDependencies
config.resolver.extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(__dirname, 'node_modules', name);
  return acc;
}, {});

config.resolver.alias = {
  'react-native-ficus-ui': root,
};

module.exports = config;
