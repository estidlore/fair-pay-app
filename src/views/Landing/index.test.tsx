import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Landing } from ".";

describe("Landing", () => {
  it("Render landing", () => {
    expect.assertions(2);
    render(<Landing />);

    const header = screen.queryByText("Fair Pay");
    expect(header).toBeOnTheScreen();
    const tableLabel = screen.queryByText("Table");
    expect(tableLabel).toBeOnTheScreen();
  });
});
