import { customElement } from "../../helpers/custom_element.js";
import { HeaderSection } from "./common/header_section.js";
import { CreateNewUserModal } from "./users/create_new_user_modal.js";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.usersHeader = customElement(".page-title");
    this.addUserButton = customElement('[test_id="Add User"]');
    // cy.get(this.projectsHeader).should("contain.text", "Users");
  }

  clickAddUser() {
    this.addUserButton.click();
    return new CreateNewUserModal();
  }
}
/*
V testu ddt_users_tests.cy.js naimportovat json s uživatelskými daty (create_user_data.json)
Vytvořit cyklus z importované JSON.
Vytvořit dynamické testy v cyklu.
Pomocí fakeru a username_prefix vytvořit unikátní username

 */
