import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page.js";

describe("TEG#B Menu tests", () => {
  it("Login and open Dashboard test", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts()
      .headerHaveText("Account");
  });
});
