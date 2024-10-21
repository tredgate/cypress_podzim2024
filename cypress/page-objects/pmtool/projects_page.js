import { CreateProjectModal } from "./create_project_modal.js";

export class ProjectsPage {
  constructor() {
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddNewProject() {
    cy.get(this.addProjectButton).click();
    return new CreateProjectModal();
  }
}
