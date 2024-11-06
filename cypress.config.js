const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    // video: true, // nastavení videa
    // videoCompression: true, // zmenšení velikosti videa
  },
});
// npx cypress open
// ^ spuštění cypress
