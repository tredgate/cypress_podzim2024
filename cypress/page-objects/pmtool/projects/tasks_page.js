import { HeaderSection } from "../common/header_section.js";
import { CreateTaskModal } from "./create_new_task_modal.js";
import { ProjectInfoPage } from "./project_info_page.js";

export class TasksPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
    this.addTaskButton = '[test_id="Add Task"]';
    this.projectInfoAnchor = '//a[text()="Project Info"]';
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateTaskModal();
  }

  clickProjectInfo() {
    cy.xpath(this.projectInfoAnchor).click();
    return new ProjectInfoPage();
  }
}
