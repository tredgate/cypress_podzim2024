import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";

// ? Tento PageObject využívá customElement. Uvnitř tohoto custom elementu jsou všechny Cypress volání.
export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username"); // ! zde nesmí být cy.get!!
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.pageHeader = customElement("h3.form-title");
    this.usernameErrorLabel = customElement("#username-error");
    this.passwordErrorLabel = customElement("#password-error");
    this.logoImg = customElement(".login-page-logo img");
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    // ? původní cypres call: cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    // cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    // cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.haveText(headerText);
    // cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }
}
