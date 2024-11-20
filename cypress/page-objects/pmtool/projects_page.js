import { HeaderSection } from "./common/header_section.js";
import { CreateProjectModal } from "./create_project_modal.js";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = 'button[test_id="Add Project"]';
    this.projectsHeader = ".page-title";
    // přesunout kontrolu do clickAddNewProject
  }

  clickAddNewProject() {
    cy.get(this.projectsHeader).should("contain.text", "Projects");
    cy.get(this.addProjectButton).click();
    return new CreateProjectModal();
  }
}
