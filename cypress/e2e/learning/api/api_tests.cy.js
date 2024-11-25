describe("Api Display Tests", () => {
  it("Check login APis", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });
});
/*
Pro Teg#B vytvořte nové PageObjecty:
DashboardPage (zobrazený po loginu)
AccountsPage (zobrazený po kliknutí na Accounts menu)
V LoginPage
po kliknutí na loginButton počkejte na doběhnutí api /login/auth
Intercept vložte do constructoru LoginPage
V DashboardPage
V constructoru vytvořte intercept na: “/accounts/user/**”
Vytvořte nové metody:
clickAccounts - klikne na Accounts a počká na /accounts/user/
V AccountsPage 
Vytvořte metodu:
titleHaveText - ověří nadpis sekce
Vytvořte test, který se přihlásí,klikne na accounts a poté zkontroluje nadpis
Využijte FluentAPI a customElement

*/
