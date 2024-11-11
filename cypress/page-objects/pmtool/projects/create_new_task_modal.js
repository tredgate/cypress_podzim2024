import { TasksPage } from "./tasks_page.js";

export class CreateTaskModal {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.assignedToLabels = ".select_checkboxes_tag label";
    this.saveButton = '[type="submit"]';
    // ? Dynamická xpath (měníme #ASSIGNEE_NAME text v metodě )
    //  this.xpathDynamic = "//label[normalize-space()='#ASSIGNEE_NAME']";
  }

  checkAssignedTo(assigneeName) {
    cy.get(this.assignedToLabels).contains(assigneeName).click();
    // ? Použití dynamické xpath
    //const assigneeSelector = this.xpathDynamic.replace("#ASSIGNEE_NAME", assigneeName)
    //cy.get(assigneeSelector).click();
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectType(type) {
    cy.get(this.typeSelect).select(type);
    return this;
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }
}
