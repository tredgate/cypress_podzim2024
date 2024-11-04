import { DashboardPage } from "../../page-objects/pmtool/dashboard_page.js";
import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Fluent Login Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
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
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });
});
