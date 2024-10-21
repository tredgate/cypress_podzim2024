import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Exercise: login with fluent interface", () => {
  it("Login and Logout in Pmtool", () => {
    const username = "cypress_zima_2024";
    const password = "Zima2024Cypress";

    new LoginPage()
      .openPmtool()
      .login(username, password)
      .clickProfile()
      .clickLogout()
      .login(username, password)
      .clickProfile()
      .clickLogout();
  });
});
