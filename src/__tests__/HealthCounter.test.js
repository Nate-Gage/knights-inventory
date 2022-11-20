import {
  render as renderWithProvider,
  screen,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { HealthCounter } from "../features/inventory/HealthCounter";
import { store } from "../app/store";
import healthReducer, {
  increment,
  decrement,
} from "../features/inventory/healthSlice";

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

describe("Test suite for HealthCounter.js", () => {
  test("HealthCounter component renders", () => {
    render(<HealthCounter />);
    const el = screen.getByTestId("healthcounter-component");
    expect(el).toBeInTheDocument();
  });

  test("HealthCounter increment action", () => {
    render(<HealthCounter />);
    const state = {
      health: 10,
    };
    const incrementAction = increment();

    const result = healthReducer(state, incrementAction);
    const health = result.health;

    expect(health).toEqual(11);
  });

  test("Healthcounter decrement action", () => {
    render(<HealthCounter />);
    const state = {
      health: 10,
    };
    const decrementAction = decrement();

    const result = healthReducer(state, decrementAction);
    const health = result.health;

    expect(health).toEqual(9);
  });

  test("Increment button fires increment action", () => {
    render(<HealthCounter />);
    const button = screen.getByTestId("increment-button");
    const currentHealth = 0;

    fireEvent.click(button);
    expect(currentHealth).toEqual((currentHealth + 1));
  });
});
