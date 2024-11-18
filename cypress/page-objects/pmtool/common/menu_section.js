import { BasePage } from "./base_page.js";

export class MenuSection extends BasePage {
  constructor(path) {
    // * MenuSection nově přijíma path, kterou dále posílá do BasePage, který ji zpracovává.
    super(path);
    this.projectsMenuAnchor = "#Projects";
    this.dashboardMenuAnchor = "#dashboard a";
    this.usersMenuAnchor = "#Users .menu-itemsitems1";
  }

  openProjects() {
    const { ProjectsPage } = require("../projects_page.js");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }

  openDashboard() {
    const { DashboardPage } = require("../dashboard_page.js");
    cy.get(this.dashboardMenuAnchor).click();
    return new DashboardPage();
  }

  openUsers() {
    const { UsersPage } = require("../users_page.js");
    cy.get(this.usersMenuAnchor).click();
    return new UsersPage();
  }
}
