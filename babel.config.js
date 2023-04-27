module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src"],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@assets': './src/assets',
          '@types': './src/types',
          '@pages': './src/pages',
          '@context': './src/context',
          '@theme': './src/theme',
          '~/*': './*'
        }
      }
    ]
  ]
};
