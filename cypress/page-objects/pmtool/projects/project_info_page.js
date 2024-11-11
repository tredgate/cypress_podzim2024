import { HeaderSection } from "../common/header_section.js";

export class ProjectInfoPage extends HeaderSection {
  constructor() {
    super();
    this.projectTitleDiv = ".portlet-title .caption";
    this.startDateXpath = '//th[text()="Start Date"]/../td';
    this.dateAddedXpath = '//th[text()="Date Added"]/../td';
    this.createdByXpath = '//th[text()="Created By"]/..//span';
    this.statusXpath = '//th[text()="Status"]/../td';
    this.priorityXpath = '//th[text()="Priority"]/../td';
  }

  projectTitleHaveText(projectName) {
    cy.get(this.projectTitleDiv).should("contain.text", projectName);
    return this;
  }

  startDateHaveText(startDate) {
    cy.xpath(this.startDateXpath).should("have.text", startDate);
    return this;
  }

  dateAddedHaveText(dateAdded) {
    cy.xpath(this.dateAddedXpath).should("contain.text", dateAdded);
    return this;
  }

  createdByHaveText(creator) {
    cy.xpath(this.createdByXpath).should("have.text", creator);
    return this;
  }

  statusHaveText(status) {
    cy.xpath(this.statusXpath).should("have.text", status);
    return this;
  }

  priorityHaveText(priority) {
    cy.xpath(this.priorityXpath).should("have.text", priority);
    return this;
  }
}
