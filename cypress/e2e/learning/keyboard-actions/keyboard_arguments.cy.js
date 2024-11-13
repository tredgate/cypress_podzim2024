//keyboard_arguments.cy.js

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Keyboard Arguments", () => {
  it("Login do PMTool using enter", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password") + "{enter}"); // Stejné jako "heslo{enter}"
  });
});
