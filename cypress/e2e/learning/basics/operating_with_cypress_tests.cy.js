describe("Operating with Cypress Tests", () => {
  it("Login Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#password").type("heslo");
    cy.get(".btn").click();
  });

  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2");
  });
});
/*
Pokud jste nepushnuli do Github minulou hodinu, pushněte
Přepněte se do main branch, pokud v ní nejste.
Vytvořte novou branch: page_objects_learning
Vytvořte složky:
v cypress (NE v e2e) složku: page-objects, v nové složce page-objects: pmtool a learning
v cypress/e2e: pmtool
v cypress/e2e/learning: page-objects-tests
*/
