module.exports = {
  collectCoverage: true,
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  coveragePathIgnorePatterns: ['<rootDir>/src/utils/index.js']
};
