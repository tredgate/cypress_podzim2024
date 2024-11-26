import { faker } from "@faker-js/faker";
describe("Exercise Registration and login", () => {
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
  it("Teg#B register and login", () => {
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

    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: randomName,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
