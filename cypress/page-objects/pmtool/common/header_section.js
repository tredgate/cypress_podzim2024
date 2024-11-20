import { LoginPage } from "../login_page.js";
import { MenuSection } from "./menu_section.js";

export class HeaderSection extends MenuSection {
  constructor(path) {
    // * HeaderSection nově přijíma path, kterou dále posílá do BasePage, který ji zpracovává.
    super(path);
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
