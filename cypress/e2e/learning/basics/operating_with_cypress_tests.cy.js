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
 Vytvořte novou složku cypress/e2e/exercises
Vytvořte v ní nový test soubor “lost_password_tests.cy.js”
Vytvořte describe “Lost passwords tests”
Vytvořte it “Lost password test”
Otevřete pmtool, klikněte forgotten password, vyplňte nejdříve e-mail: test@tredgate.cz, poté username: test a potvrďte.
 */
