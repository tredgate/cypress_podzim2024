import { LoginPage } from "../../../page-objects/aapmtool/login_page.js";

//debug.cy.js
describe("Debugging", () => {
  it("Using Debug Mode in Cypress", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024").debug(); // Debug funkce type()
    cy.get("#password").debug().type("Zima2024Cypress"); // Debug funkce get()
    cy.get(".btn").click().debug(); // Debug funkce click()
  });

  // ! Skipnutý test, aby nám nedělal problémy v budoucnu (zastavuje se na pause())
  it.skip("Using pause() function", () => {
    cy.visit("https://tredgate.com/pmtool");
    // ! Funkce pause() se nikdy nesmí dostat do Gitu, způsobí zamrznuté testy v CI/CD
    cy.get("#username").type("cypress_zima_2024").pause(); // pause funkce type()
    cy.get("#password").pause().type("Zima2024Cypress"); // pause funkce get()
    cy.get(".btn").click().pause(); // pause funkce click()
  });

  it.skip("Wrong selector", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#wrong_selector").type("cypress_zima_2024");
    // ! Způsobí chybu (afterEach v it)
    //  afterEach(() => {
    //    cy.log("Co se stane?");
    //  });
  });

  it.skip("Wrong import", () => {
    new LoginPage(); //import není nyní špatně, pokud chcete nasimulovat špatný import, změňte cestu v importu na řádku 1
  });
});
