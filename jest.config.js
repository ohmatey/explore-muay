module.exports = {
  moduleFileExtensions: [
    "js"
  ],
  testMatch: [
    "**/*.test.js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./tests/enzyme.js"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/tests/enzyme.js",
    "expect-puppeteer"
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  verbose: true,
  preset: "jest-puppeteer"
}
