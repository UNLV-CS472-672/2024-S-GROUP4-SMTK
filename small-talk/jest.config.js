module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>'],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/*.config.js",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
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
    "@/(.*)": "<rootDir>/$1"
  },
};
