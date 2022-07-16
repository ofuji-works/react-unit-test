module.exports = {
    globals: {
        "ts-jest": {
          tsconfig: './tsconfig.test.json'
        }
    },
    rootDir: '__tests__',
    cacheDirectory: '<rootDir>/.cache',
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    testMatch: [
        "<rootDir>/**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    coverageDirectory: '<rootDir>/.coverage',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
    transformIgnorePatterns: ['node_modules'],
    verbose: true
}
