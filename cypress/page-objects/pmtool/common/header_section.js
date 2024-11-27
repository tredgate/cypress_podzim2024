import { customElement } from "../../../helpers/custom_element.js";
import { LoginPage } from "../login_page.js";
import { MenuSection } from "./menu_section.js";

export class HeaderSection extends MenuSection {
  constructor(path) {
    // * HeaderSection nově přijíma path, kterou dále posílá do BasePage, který ji zpracovává.
    super(path);
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
    this.userNameSpan = customElement(".username");
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  userNameHaveText(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    this.userNameSpan.containText(fullName);
    return this;
  }
}
