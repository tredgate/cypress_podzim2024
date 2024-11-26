describe("Api Display Tests", () => {
  it("Check login APis", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Check login APIs more tests", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").then((interception) => {
      cy.wrap(interception).its("response.statusCode").should("eq", 201);
      cy.wrap(interception).its("response.body.access_token").should("exist");
      cy.wrap(interception).its("request.body.username").should("exist");
      cy.wrap(interception)
        .its("request.body.username")
        .should("eq", "fifka_petr");
    });
  });

  it.only("Mock GET account", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/**", { fixture: "mock_accounts.json" }).as(
      "accounts_api"
    );
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
    cy.get('[data-testid="accounts_section_link"]').click();
  });
});
