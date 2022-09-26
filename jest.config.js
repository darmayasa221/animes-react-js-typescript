module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/infrastructures/assert.ts',
    '^@Applications/(.*)$': ['<rootDir>/src/Applications/$1'],
    '^@Commons/(.*)$': ['<rootDir>/src/Commons/$1'],
    '^@Domains/(.*)$': ['<rootDir>/src/Domains/$1'],
    '^@Infrastructures/(.*)$': ['<rootDir>/src/Infrastructures/$1'],
    '^@Interface/(.*)$': ['<rootDir>/src/Interfaces/$1']
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**']
}
