const { createDefaultPreset } = require('ts-jest');

module.exports = {
  verbose: false,
  testEnvironment: 'jsdom',
  transform: {
    ...createDefaultPreset().transform,
  },
  maxWorkers: 4,
  cacheDirectory: '<rootDir>/.jest-cache',
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup.ts',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dist-transpiled/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dist-transpiled/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|sass)$': '<rootDir>/jest/__mocks__/styleMock.js',
  },
};
