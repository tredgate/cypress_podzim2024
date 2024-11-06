import { faker } from "@faker-js/faker";
import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Exercise: Create project", () => {
  it("Create project in PMTool", () => {
    const username = "cypress_zima_2024";
    const password = "Zima2024Cypress";
    const projectName =
      "PetrFifkaProjekt_" + faker.number.int({ min: 1, max: 10000 });

    new LoginPage()
      .openPmtool()
      .login(username, password)
      .openProjects()
      .clickAddNewProject()
      .typeName(projectName)
      .clickSave();
  });
});
