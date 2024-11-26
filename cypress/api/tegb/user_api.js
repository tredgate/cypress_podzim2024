export class UserApi {
  register(username, password, email) {
    return cy.request({
      url: Cypress.env("tegb_api_url") + "user/register",
      method: "POST",
      body: {
        username: username,
        email: email,
        password: password,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
