//forms_tests.cy.js
describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
  });
  it("Check radio button", () => {
    cy.get("#basic").check();
    cy.get("#basic").should("be.checked");
    cy.get('input[name="subscription"]').check("premium"); // více přepoužitelné, například v pageobjectech, protože z testu mi může přijít jen value
    cy.get("#premium").should("be.checked");
  });

  it("Checkboxes checks", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("reading");
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get('input[name="interests[]"]').check(["music", "travel"]); // Check více hodnot najednou
  });

  it("Uncheck checkboxes", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Clear input", () => {
    cy.get("#name").clear().type("Petr");
    cy.get("#name").should("have.value", "Petr");
  });

  it("Submit form", () => {
    cy.get("form").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  it("Type date", () => {
    cy.get("#datepicker").type("2024-01-25"); // u <input type="date"> je vždy v type nutné zachovat formát: yyyy-MM-dd
    cy.get("#datepicker").should("have.value", "2024-01-25");
  });

  it("Upload file, fixtures", () => {
    cy.fixture("test.txt").as("uploadFile");
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it("Select from dropdown", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").select(3); // vybrání dle pořadí (idexuje se od 0), tady vybíráme 4. prvek
    cy.get("#gender").should("have.value", "other");
  });
});
