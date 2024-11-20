//users_page_atomic_tests.cy.js

import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../page-objects/pmtool/users_page.js";

describe("Users Page Atomic Tests", () => {
  const usersPage = new UsersPage();

  beforeEach(() => {
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
