const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const blacklist = require('metro-config/src/defaults/exclusionList');
const escape = require('escape-string-regexp');
const pak = require('./package.json');

const config = getDefaultConfig(__dirname);

const root = path.resolve(__dirname, '.');
const components = path.resolve(__dirname, '../../packages/components');
const styleSystem = path.resolve(__dirname, '../../packages/style-system');
const theme = path.resolve(__dirname, '../../packages/theme');

const modules = [
  '@expo/vector-icons',
  ...Object.keys(pak.peerDependencies ?? {}),
];

config.watchFolders = [
  root,
  components,
  styleSystem,
  theme,
];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(components, 'node_modules'),
  path.resolve(styleSystem, 'node_modules'),
  path.resolve(theme, 'node_modules'),
  path.resolve(root, 'node_modules'),
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
  'react-native-ficus-ui': path.resolve(components, 'src'),
  '@ficus-ui/style-system': path.resolve(styleSystem, 'src'),
  '@ficus-ui/theme': path.resolve(theme, 'src'),
};

module.exports = config;
