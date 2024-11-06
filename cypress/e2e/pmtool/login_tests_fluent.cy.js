import { DashboardPage } from "../../page-objects/pmtool/dashboard_page.js";
import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Fluent Login Tests", () => {
  const username = Cypress.env("pmtool_username");
  const password = Cypress.env("pmtool_password");

  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });

  it("Login to Pmtool and logout using Fluent API", () => {
    new DashboardPage()
      .clickProfile()
      .clickLogout()
      .typeUsername("Jsem odhlášený");
  });

  it("Double Login to Pmtool and logout", () => {
    new DashboardPage()
      .clickProfile()
      .clickLogout()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });
});
