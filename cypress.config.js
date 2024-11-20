const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "https://tredgate.com/pmtool",
    eshop_url: "https://tredgate.com/eshop",
    webtrain_url: "https://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://tredgate.com/pmtool",
    // video: true, // nastavení videa
    // videoCompression: true, // zmenšení velikosti videa
  },
});
// npx cypress open
// ^ spuštění cypress
