import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Using Asserts in PageObjects", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHaveText("Login");
  });
});
