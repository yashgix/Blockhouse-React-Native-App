module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json'
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-navigation|@react-navigation)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  coverageReporters: [
    'text',
    'lcov'
  ]
};