import { BasePage } from "./common/base_page.js";
import { TasksPage } from "./projects/tasks_page.js";

export class CreateProjectModal extends BasePage {
  constructor() {
    super("module=items/form&path=21");
    this.nameInput = 'div[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.startDateInput = 'div[data-testid="Start Date"] input';
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  typeName(projectName) {
    cy.get(this.nameInput).type(projectName);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }
}
