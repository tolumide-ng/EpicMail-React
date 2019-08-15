module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  jest: {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      // '.+\\.(css|less)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    testPathIgnorePatterns: ['<rootDir>/src/utils'],
    coveragePathIgnorePatterns: ['<rootDir>/src/']
  }
  // collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**']
};
