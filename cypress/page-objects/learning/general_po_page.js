// general_po_page.js
export class GeneralPoPage {
  constructor() {
    this.someElement = "selector";
  }

  actionWithElement() {
    cy.log(this.someElement);
  }
}
