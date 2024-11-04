// Test soubor
// mocha_tests.cy.js
// Test Suite
// Mocha Tests
// Test 1
// Visit pmtool
// Test 2
// Visit pmtool and login

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Mocha Tests", () => {
  // Zkratka: bfe
  beforeEach(() => {
    cy.log("Běžím před každým testem");
    cy.viewport(800, 600);
  });

  it("Test 1", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProfile()
      .clickLogout();
  });

  it("Test 2", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProfile()
      .clickLogout()
      .login("cypress_zima_2024", "Zima2024Cypress");
  });

  //zkratka: afe
  afterEach(() => {
    cy.log("Běžím po každém testu");
  });
});
