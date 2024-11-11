import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import { faker } from "@faker-js/faker";

describe("Exercise: create project with task", () => {
  it("Create project and task, check information", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");
    const priority = "High";
    const status = "Open";
    const randomNumber = faker.number.int({ max: 100000 });
    const projectName = `FIFKA_self-exercise_${randomNumber}`;
    const startDate = "2024-11-11";
    const startDateFormatted = "11/11/2024";
    const taskName = `FIFKA_TASK_${randomNumber}`;
    const taskAssigneeName = "Petr Fifka";
    const taskPriority = "Urgent";
    const taskType = "Change";
    const taskStatus = "Open";

    new LoginPage()
      .openPmtool()
      .login(username, password)
      .openProjects()
      .clickAddNewProject()
      .typeName(projectName)
      .selectPriority(priority)
      .selectStatus(status)
      .typeStartDate(startDate)
      .clickSave()
      .clickAddTask()
      .typeName(taskName)
      .checkAssignedTo(taskAssigneeName)
      .selectPriority(taskPriority)
      .selectStatus(taskStatus)
      .selectType(taskType)
      .clickSave()
      .clickProjectInfo()
      .projectTitleHaveText(projectName)
      .statusHaveText(status)
      .priorityHaveText(priority)
      .dateAddedHaveText(startDateFormatted)
      .startDateHaveText(startDateFormatted);
  });
});
