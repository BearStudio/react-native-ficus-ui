const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const blacklist = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const pak = require('../package.json');

const config = getDefaultConfig(__dirname);

const root = path.resolve(__dirname, '../src');

const modules = ['@expo/vector-icons', ...Object.keys(pak.peerDependencies)];

config.watchFolders = [
  // Add the parent directory to the watchFolders
  root,
];

config.resolver.nodeModulesPaths = [
  // Ensure that Metro knows where to find the node_modules of the main project
  path.resolve(__dirname, 'node_modules'),
  path.resolve(root, 'node_modules'), // Optional: if the parent folder has its own node_modules
];

// We need to make sure that only one version is loaded for peerDependencies
// So we blacklist them at the root, and alias them to the versions in example's node_modules
config.resolver.blacklistRE = blacklist(
  modules.map(
    (m) => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`)
  )
);

config.resolver.extraNodeModules = modules.reduce((acc, name) => {
  acc[name] = path.join(__dirname, 'node_modules', name);
  return acc;
}, {});

config.resolver.alias = {
  // Alias react-native-ficus-ui to the src folder in the parent directory
  'react-native-ficus-ui': path.resolve(root, 'src'),
};

module.exports = config;
