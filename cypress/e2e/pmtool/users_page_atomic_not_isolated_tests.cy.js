//users_page_atomic_not_isolated_tests.cy.js

import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../page-objects/pmtool/users_page.js";

// ? Tento describe ma vypnutou izolaci testu, to znamena, ze vsechny testy pokracuji na tom miste v prohlizeci, kde predchozi test skoncil - { testIsolation: false }
describe("Users Page Atomic Tests", { testIsolation: false }, () => {
  const usersPage = new UsersPage();

  // ? V neizolovaných testech používáme namísto beforeEach before (běží vždy jen před prvním testem)
  before(() => {
    // ? tři čistící funkce - nutné v ne-izolovaných testech
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"));
    usersPage.visit();
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      usersPage.usersHeader.isVisible();
    });

    it("Title have text", () => {
      usersPage.usersHeader.haveText("Users");
    });
  });

  context("Add New User Button Test", () => {
    it("Add user button is visible", () => {
      usersPage.addUserButton.isVisible();
    });

    it("Add user button have text", () => {
      usersPage.addUserButton.haveText("Add User");
    });
  });
});
