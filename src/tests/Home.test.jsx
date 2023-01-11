import Home from "../pages/Home";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Find home components", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test("Finds title for passengers list ", () => {
    expect(screen.getByText("Pasajeros registrados")).toBeDefined();
  });

  test("Find form to register"),
    () => {
      const form = screen.getByRole(/form/i).toBeDefined();
    };
});
