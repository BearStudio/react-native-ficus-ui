module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'react-native-ficus-ui': '../../packages/components/src/index',
          },
        },
      ],
    ],
  };
};
