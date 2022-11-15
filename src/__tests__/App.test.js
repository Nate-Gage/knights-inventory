import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

describe("Test suite for App component", () => {
  test("App component renders", () => {

    render(<App />);
    const el = screen.getByTestId("app-component");

    expect(el).toBeInTheDocument();
  });
});
