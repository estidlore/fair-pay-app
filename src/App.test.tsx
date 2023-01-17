import { render, screen } from "@testing-library/react-native";
import React from "react";

import { App } from "./App";

describe("App", () => {
  it("Render landing", () => {
    expect.assertions(1);
    render(<App />);

    const header = screen.queryByText("Fair Pay");
    expect(header).toBeOnTheScreen();
  });
});
