//atomic_tests.cy.js

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { ProjectInfoPage } from "../../../page-objects/pmtool/projects/project_info_page.js";

describe("Atomic Tests", () => {
  it("Direct opening pages", () => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"));
    new ProjectInfoPage(1833).visit();
  });

  context("Test Group", () => {
    beforeEach(() => {
      cy.log("BeforeEach only Test Group");
    });

    it("Test 1", () => {
      cy.log("Test 1");
    });

    it("Test 2", () => {
      cy.log("Test 2");
    });
  });

  context("Test Group 2", () => {
    it("Test 1", () => {
      cy.log("Test 1");
    });

    it("Test 2", () => {
      cy.log("Test 2");
    });
  });
});
