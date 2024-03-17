module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/*.config.js",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
