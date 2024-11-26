import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page.js";

describe("Login Tests TEG#B", () => {
  it("E2E login test", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
