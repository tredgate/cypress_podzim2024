import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tegb/user_api.js";

describe("TEG#B User Tests", () => {
  let randomName;
  let randomEmail;
  let password;

  beforeEach(() => {
    randomName = faker.internet.userName();
    randomEmail = faker.internet.exampleEmail();
    password = "Tredgate2024#";
    cy.log(`Username generated: ${randomName}`);
    cy.log(`Email generated: ${randomEmail}`);
  });

  it("Register and login via API", () => {
    cy.visit(Cypress.env("tegb_url"));
    const userApi = new UserApi();
    userApi.register(randomName, password, randomEmail);
    userApi.login(randomName, password).then((response) => {
      expect(response.status).to.eq(201);
      const accessToken = response.body.access_token;
      cy.setCookie("access_token", accessToken);
    });
    cy.visit(Cypress.env("tegb_url") + "app");
  });
});
