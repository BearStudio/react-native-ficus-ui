// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const ficusUiPackagePath = '../';
// const ficusUiPackagePath =
//   '/Users/qlerebours/Projects/BearStudio/react-native-ficus-ui';

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.nodeModulesPaths.push(ficusUiPackagePath);
config.watchFolders.push(ficusUiPackagePath);

module.exports = config;
