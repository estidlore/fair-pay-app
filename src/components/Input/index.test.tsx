import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import { Input } from ".";

describe("Input", () => {
  beforeEach(() => {
    render(<Input placeholder={"Full name"} />);
  });

  it("Display placeholder", () => {
    expect.assertions(1);

    const input = screen.getByPlaceholderText("Full name");
    expect(input).toBeOnTheScreen();
  });

  it("Change value", () => {
    expect.assertions(1);

    const input = screen.getByPlaceholderText("Full name");
    fireEvent.changeText(input, "John Doe");
    expect(input.props.value).toBe("John Doe");
  });
});
