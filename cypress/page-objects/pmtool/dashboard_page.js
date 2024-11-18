import { HeaderSection } from "./common/header_section.js";

export class DashboardPage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.welcomePageHeader = "#welcome-page-header";
    //cy.get(this.welcomePageHeader).should("be.visible");
  }

  // ? Ideální řešení jak dělat kontroly v constructoru, při implementaci visit()
  /*
    constructor(isOpened = true) {
      super("module=dashboard/dashboard");
      this.welcomePageHeader = "#welcome-page-header";
      if(isOpened) {
        cy.get(this.welcomePageHeader).should("be.visible");
      } 
    }
  */
}
