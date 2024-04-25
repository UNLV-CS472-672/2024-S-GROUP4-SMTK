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
      branches: 87,
      functions: 87,
      lines: 87,
      statements: 87,
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
