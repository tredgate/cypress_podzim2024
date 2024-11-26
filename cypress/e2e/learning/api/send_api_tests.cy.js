import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api.js";

describe("Send HTTP Requests Tests", () => {
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

  it("POST registration TEG#B", () => {
    cy.request({
      url: "http://localhost:3000/user/register",
      method: "POST",
      body: {
        username: randomName,
        email: randomEmail,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.userId).to.be.ok; // zkontroluje, že userId existuje, a že je naplněný
      expect(response.body).to.have.property("username"); // zkontroluje, že username existuje v body
      expect(response.body.username).to.eq(randomName);
      expect(response.body.email).to.be.a("string");
    });

    // Kontrola registrace přes login na frontendu
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(randomName);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Register with API object", () => {
    new UserApi()
      .register(randomName, password, randomEmail)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.userId).to.be.ok; // zkontroluje, že userId existuje, a že je naplněný
        expect(response.body).to.have.property("username"); // zkontroluje, že username existuje v body
        expect(response.body.username).to.eq(randomName);
        expect(response.body.email).to.be.a("string");
      });
  });

  it("Register and Login with API Object", () => {
    const userApi = new UserApi();
    userApi.register(randomName, password, randomEmail);
    userApi.login(randomName, password).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
