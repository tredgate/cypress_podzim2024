//mouse_actions_tests.cy.js
describe("Mouse Actions Tests", () => {
  it("Scroll Into View", () => {
    cy.visit("https://tredgate.com/webtrain");
    cy.get("h1").scrollIntoView().should("be.visible");
  });

  it("Double Click", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("div#double-click").dblclick();
  });

  it("Click and Hold", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown");
    cy.wait(5000);
    cy.get("#click-box").trigger("mouseup");
  });

  it.only("Drag and Drop", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
});
