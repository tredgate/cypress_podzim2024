import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Exercise: Polymorphism", () => {
  it("Logout from Projects", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects()
      .clickProfile()
      .clickLogout();
  });

  it("Open Projects, Dashboard and Users section", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects()
      .openDashboard()
      .openUsers()
      .clickProfile()
      .clickLogout();
  });
});
