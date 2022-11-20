import {
  render as renderWithProvider,
  screen,
  cleanup,
} from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
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

  test("Logo renders", () => {
    render(<App />);
    const el = screen.getByTestId("logo");
    expect(el).toBeInTheDocument();
  });

  test("Make sure App Component contains the Inventory component", () => {
    render(<App />);
    const el = screen.getByText(/This is the Knight's Inventory!/i);
    expect(el).toBeInTheDocument();
  });

  test("Make sure App Component contains the HealthCounter component", () => {
    render(<App />);
    const el = screen.getByText(/Health is currently at/i);
    expect(el).toBeInTheDocument();
  });
});
