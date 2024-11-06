//aliases.cy.js;

describe("Using Aliases", () => {
  it("Checking login placeholder consistency", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder"); // invoke slouží k vyvolání akce nad elementem, například vytažení atributu či textu https://docs.cypress.io/api/commands/invoke
    cy.get("#password").invoke("attr", "placeholder").as("passwordPlaceholder");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    cy.get("@usernamePlaceholder").then((placeholder) => {
      cy.get("#username").should("have.attr", "placeholder", placeholder);
    });
    cy.get("@passwordPlaceholder").then((placeholder) => {
      cy.get("#password").should("have.attr", "placeholder", placeholder);
    });
  });
});
