const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  videoUploadOnPasses: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  retries: {
      runMode: 3,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: `https://qainterview.pythonanywhere.com/`,
  },
});
