module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo', // nếu dùng Expo
      'module:metro-react-native-babel-preset', // nếu thuần React Native
    ],
    plugins: [
      'react-native-reanimated/plugin', // bắt buộc cho Reanimated
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
