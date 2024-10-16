import { GeneralPoPage } from "../../../page-objects/learning/general_po_page";

//first_po_tests.cy.js;
describe("First Page Objects Tests", () => {
  it("General Page Object Init", () => {
    const firstPageObject = new GeneralPoPage();
    firstPageObject.actionWithElement();
  });
});
