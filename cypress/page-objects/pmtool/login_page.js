import { DashboardPage } from "./dashboard_page.js";

//login_page.js
export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username"; // ! zde nesmí být cy.get!!
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.pageHeader = "h3.form-title";
    this.usernameErrorLabel = "#username-error";
    this.passwordErrorLabel = "#password-error";
    this.logoImg = ".login-page-logo img";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }
}
