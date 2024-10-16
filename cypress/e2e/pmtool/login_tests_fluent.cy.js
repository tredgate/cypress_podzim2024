//login_tests_fluent.cy.js

import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Fluent Login Tests", () => {
  it("Login to Pmtool and logout using Fluent API", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout()
      .typeUsername("Jsem odhlášený");
  });
});
