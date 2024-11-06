import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

//each_wrap.cy.js;
describe("Using each(), wrap(), within() functions", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects();
  });

  it("All project rows have buttons edit and delete", () => {
    cy.xpath('//tr[contains(@test-id, "project_id_")]').each((row) => {
      cy.wrap(row).within(() => {
        cy.get("a[title='Delete']").should("be.visible");
        cy.get("a[title='Edit']").should("be.visible");
      });
    });
  });

  it("String have value", () => {
    const expected = "Testovaný text";
    const actual = "Testovaný text";
    cy.wrap(actual).should("eq", expected);
  });
});
