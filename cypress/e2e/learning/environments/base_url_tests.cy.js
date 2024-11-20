// environments
// base_url_tests.cy.js

describe("Base URL Tests", () => {
  it("Using baseUrl in visit", () => {
    cy.visit("/");
  });

  it.only("Open different url than baseUrl", () => {
    cy.visit("https://www.tredgate.cloud/api");
  });
});
