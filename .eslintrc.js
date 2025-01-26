module.exports = {
  root: true,
  extends: [
    '@react-native',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
  }
};
