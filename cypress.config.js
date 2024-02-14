const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://sidling-stork-dev.netlify.app/',
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
      // allureWriter(on, config);
      return config;
    }
  },
});