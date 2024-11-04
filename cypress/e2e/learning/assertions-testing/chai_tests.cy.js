//chai_tests.cy.js

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Chai Tests (Tests assertions)", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Have Text Assert", () => {
    cy.get(".form-title").should("have.text", "Login");
  });

  it.skip("FAILING assert", () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Exercise: Have Text", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Contains Text Assert", () => {
    new LoginPage().login("cypress_zima_2024", "Zima2024Cypress");
    cy.get("#welcome-page-header").should(
      "contain.text",
      "Vítej v testovací aplikaci"
    );
  });

  it("Have Value Assert", () => {
    const username = "Testujeme";
    new LoginPage().typeUsername(username);
    cy.get("#username").should("have.value", username);
  });

  it("Exercise: Have Value", () => {
    const email = "test@tredgate.cz";
    cy.get("#forget_password").click();
    cy.get(":nth-child(3) > .input-icon > .form-control")
      .type(email)
      .should("have.value", email);
    // Alternativně:
    cy.get(":nth-child(3) > .input-icon > .form-control").should(
      "have.value",
      email
    );
  });

  it("Have Class Assert", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Be Visible Assert", () => {
    cy.get(".btn").should("be.visible");
  });

  it("Exist Assert", () => {
    cy.get(".btn").should("exist");
  });

  it("Exercise: visibility assert", () => {
    new LoginPage().login("cypress_zima_2024", "Zima2024Cypress");
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Have Attribute Assert", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Exercise: Have Attribute Assert", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });

  it("Negative Assert: not exist", () => {
    cy.get(".alert").should("not.exist");
  });
});
