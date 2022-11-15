import {
  render as renderWithProvider,
  screen,
  cleanup,
} from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import Inventory from "../features/inventory/Inventory";
import { store } from "../app/store";

afterEach(() => {
  cleanup();
});

/**
 *
 * @param {The component to render} component
 * @returns The component wrapped with the redux Provider and store prop.
 */
const render = (component) =>
  renderWithProvider(<Provider store={store}>{component}</Provider>);

describe("Test suite for App component", () => {
  test("App component renders", () => {
    render(<App />);
    const el = screen.getByTestId("app-component");

    expect(el).toBeInTheDocument();
  });

  test("Make sure App Component contains the Inventory component", () => {
    const { getByText } = render(<App />);
    expect(getByText(/This is the Knight's Inventory!/i)).toBeInTheDocument();
  });
});
