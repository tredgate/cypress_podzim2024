import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login Page Atomic Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username Input", () => {
    it("Is Visible", () => {
      cy.get(loginPage.usernameInput).should("be.visible");
    });

    it("Have Placeholder", () => {
      cy.get(loginPage.usernameInput).should(
        "have.attr",
        "placeholder",
        "Username"
      );
    });

    it("Is editable", () => {
      const username = "Test";
      loginPage.typeUsername(username);
      cy.get(loginPage.usernameInput).should("have.value", username);
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      cy.get(loginPage.usernameErrorLabel).should(
        "have.text",
        "This field is required!"
      );
    });
  });
  context("Password Input", () => {
    it("Is Visible", () => {
      cy.get(loginPage.passwordInput).should("be.visible");
    });

    it("Have Placeholder", () => {
      cy.get(loginPage.passwordInput).should(
        "have.attr",
        "placeholder",
        "Password"
      );
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      cy.get(loginPage.passwordErrorLabel).should(
        "have.text",
        "This field is required!"
      );
    });
  });
  context("Logo image", () => {
    it("Is Visible", () => {
      cy.get(loginPage.logoImg).should("be.visible");
    });
  });

  context("Title header", () => {
    it("Is Visible", () => {
      cy.get(loginPage.pageHeader).should("be.visible");
    });

    it("Have Text", () => {
      cy.get(loginPage.pageHeader).should("have.text", "Login");
    });
  });
});

/*
Připravte selektory a testy (do každý element bude mít svůj kontext) pro:
heslo (viditelnost, placeholder, chybová zpráva),
logo (viditelnost),  
nadpis (viditelnost, text), 


*/
