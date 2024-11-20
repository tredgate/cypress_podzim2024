const baseConfig = require("../cypress.config.js");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://www.tredgate.cloud/api",
    eshop_url: "https://alza.cz",
    webtrain_url: "https://google.com",
    automation_test_store_url: "https://rohlik.cz",
  },
};
