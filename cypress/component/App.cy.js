import App from "../../src/App";
import { store } from "../../src/app/store";
import { Provider } from "react-redux";

describe("App.cy.js", () => {
  it("renders", () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    cy.get("[data-test='logo']");
    cy.get("[data-test='header-message']").should(
      "contains.text",
      "Testing Text for Cypress"
    );
  });
});
