import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";

export class TegBLoginPage {
  constructor() {
    this.tegbUrl = "http://localhost:3001";
    this.usernameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginButton = customElement('[data-testid="log_in"]');
    cy.intercept("/auth/login").as("login_api");
  }

  openTegb() {
    cy.visit(this.tegbUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    cy.wait("@login_api");
    return new DashboardPage();
  }
}
