import {
  render as renderWithProvider,
  screen,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { Inventory } from "../features/inventory/Inventory";
import { store } from "../app/store";
import inventoryReducer, {
  editWeapon,
} from "../features/inventory/inventorySlice";

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

describe("Test suite for Inventory component", () => {
  test("Inventory component renders", () => {
    render(<Inventory />);
    const el = screen.getByTestId("inventory-component");
    expect(el).toBeInTheDocument();
  });

  test("Weapon type switches between Spear and Small Stick on button click", () => {
    render(<Inventory />);
    const buttonEl = screen.getByRole("button");
    expect(screen.getByText("Spear")).toBeInTheDocument();

    fireEvent.click(buttonEl);
    expect(screen.getByText("Small stick (whoops!)")).toBeInTheDocument();

    fireEvent.click(buttonEl);
    expect(screen.getByText("Spear")).toBeInTheDocument();
  });
});

describe("Inventory reducer", () => {
  test("should update state of the weapon", () => {
    const state = undefined;
    const action = editWeapon({
      type: "Dynamite",
      rarity: "Super Rare",
      power: 20,
    });
    const result = inventoryReducer(state, action);
    const weapon = result.weapon;

    expect(weapon.type).toEqual("Dynamite");
    expect(weapon.power).toEqual(20);
    expect(weapon.rarity).toEqual("Super Rare");
  });
});
