export class DashboardPage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}
