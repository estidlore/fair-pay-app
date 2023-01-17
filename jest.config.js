module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["index.js", "src/.*types.*"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
