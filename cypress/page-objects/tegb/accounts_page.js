import { customElement } from "../../helpers/custom_element.js";

export class AccountsPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
  }

  headerHaveText(headerText) {
    this.titleHeader.haveText(headerText);
    return this;
  }
}
