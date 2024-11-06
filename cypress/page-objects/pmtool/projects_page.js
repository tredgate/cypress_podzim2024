import { HeaderSection } from "./common/header_section.js";
import { CreateProjectModal } from "./create_project_modal.js";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addProjectButton = 'button[test_id="Add Project"]';
    this.projectsHeader = ".page-title";
    cy.get(this.projectsHeader).should("contain.text", "Projects");
  }

  clickAddNewProject() {
    cy.get(this.addProjectButton).click();
    return new CreateProjectModal();
  }
}
