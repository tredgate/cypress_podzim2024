const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "https://tredgate.com/pmtool",
    eshop_url: "https://tredgate.com/eshop",
    webtrain_url: "https://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
    tegb_url: "http://localhost:3001/",
    tegb_api_url: "http://localhost:3000/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://tredgate.com/pmtool",
    chromeWebSecurity: false,
    // video: true, // nastavení videa
    // videoCompression: true, // zmenšení velikosti videa
  },
});
// npx cypress open
// ^ spuštění cypress
