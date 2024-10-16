import { LoginPage } from "./login_page.js";

export class DashboardPage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
