const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const escape = require('escape-string-regexp');
const pak = require('./package.json');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../../');
const libRoot = path.resolve(workspaceRoot, 'packages/react-native-ficus-ui');

const config = getDefaultConfig(projectRoot);

const modules = [
  '@expo/vector-icons',
  ...Object.keys(pak.peerDependencies ?? {}),
];

// ---- blockList (sans exclusionList) ----
const customBlockList = [
  // Block test files
  new RegExp(`${escape(libRoot)}.*\\.(spec|test)\\.[jt]sx?$`),

  // Block @testing-library/react-native from node_modules
  new RegExp(
    `${escape(
      path.resolve(workspaceRoot, 'node_modules/@testing-library/react-native')
    )}\\/.*`
  ),

  // Block test utils inside the lib
  new RegExp(`${escape(path.resolve(libRoot, 'src/test-utils'))}\\/.*`),
];

// Normalise la blockList par défaut en tableau puis concatène
const defaultBlockList = config.resolver?.blockList;
const defaultAsArray = Array.isArray(defaultBlockList)
  ? defaultBlockList
  : defaultBlockList
    ? [defaultBlockList]
    : [];

config.resolver.blockList = [...defaultAsArray, ...customBlockList];

// ---- monorepo/watch ----
config.watchFolders = [libRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Prevent multiple versions of peerDependencies
config.resolver.extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(libRoot, 'node_modules', name);
  return acc;
}, {});

config.resolver.alias = {
  'react-native-ficus-ui': libRoot,
};

module.exports = config;
