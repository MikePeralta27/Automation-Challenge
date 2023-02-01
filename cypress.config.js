const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'Cypress JavaScript POM',
  experimentalWebKitSupport: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'GBH Tests',
    reportPageTitle: 'Test Automation Results',
    reportFilename: 'gbhReports',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    timestamp: "longDate",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.google.com/',
    specPattern: 'cypress/e2e/specs/**/*.{js,jsx,ts,tsx}',
  },
})
