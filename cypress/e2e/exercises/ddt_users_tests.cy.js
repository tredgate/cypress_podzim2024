import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import newUserData from "../../fixtures/create_user_data.json";
import { faker } from "@faker-js/faker";
import { UsersPage } from "../../page-objects/pmtool/users_page.js";

describe("DDT create users", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
      .openUsers();
  });

  newUserData.forEach((userData) => {
    it(`DDT Create Users: ${userData.role}`, () => {
      const username =
        userData.username_prefix + faker.number.int({ min: 10000, max: 99999 });
      const email = faker.internet.exampleEmail();
      const firstName = "Pepa";
      const lastName = "Depo";
      new UsersPage()
        .clickAddUser()
        .selectRole(userData.role)
        .typeEmail(email)
        .typeUsername(username)
        .typePassword(userData.password)
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .login(username, userData.password)
        .userNameHaveText(firstName, lastName);
    });
  });
});
/*

Vyplnit kroky vytvoření uživatele, odhlášení a přihlášeni s novým uživatelem
V rámci HeaderSection vytvořit kontrolu na jméno uživatele a přidat do testu

*/
