export class CreateProjectModal {
  constructor() {
    this.nameInput = 'div[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
  }

  typeName(projectName) {
    cy.get(this.nameInput).type(projectName);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    //TODO add returned PageObject after implementation
  }
}
