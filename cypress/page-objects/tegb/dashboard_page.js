import { customElement } from "../../helpers/custom_element.js";
import { AccountsPage } from "./accounts_page.js";

export class DashboardPage {
  constructor() {
    this.accountsMenuButton = customElement(
      '[data-testid="accounts_section_link"]'
    );
    cy.intercept("/accounts/user/**").as("accounts_api");
  }

  clickAccounts() {
    this.accountsMenuButton.click();
    cy.wait("@accounts_api");
    return new AccountsPage();
  }
}
