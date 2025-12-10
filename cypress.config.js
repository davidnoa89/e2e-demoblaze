const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: false,
    env: {
      apiUrl: 'https://api.demoblaze.com'
    },
    setupNodeEvents(on, config) {
      // aquí puedes añadir plugins si los requieres
    },
  },
})
