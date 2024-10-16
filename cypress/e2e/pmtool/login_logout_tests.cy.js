//login_logout_tests.cy.js
import { DashboardPage } from "../../page-objects/pmtool/dashboard_page.js";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to Pmtool", () => {
    const loginPage = new LoginPage();
    //const dashboardPage = new Dashboard(); // další page object
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Pmtool Login and Logout test", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    loginPage.openPmtool();
    loginPage.login("cypress_zima_2024", "Zima2024Cypress");
    dashboardPage.clickProfile();
    dashboardPage.clickLogout();
  });
});
