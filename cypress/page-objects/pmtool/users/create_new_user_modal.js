import { customElement } from "../../../helpers/custom_element.js";
import { UsersPage } from "../users_page.js";

export class CreateNewUserModal {
  constructor() {
    this.usernameInput = customElement('[data-testid="Username"] input');
    this.passwordInput = customElement("#password");
    this.firstNameInput = customElement('[data-testid="First Name"] input');
    this.lastNameInput = customElement('[data-testid="Last Name"] input');
    this.emailInput = customElement('[data-testid="User Email"] input');
    this.roleSelect = customElement('[data-testid="Access Group"] select');
    this.saveButton = customElement('[type="submit"]');
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  typeFirstName(firstName) {
    this.firstNameInput.type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastNameInput.type(lastName);
    return this;
  }

  typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  selectRole(role) {
    this.roleSelect.get().select(role);
    return this;
  }

  clickSave() {
    this.saveButton.click();
    return new UsersPage();
  }
}
