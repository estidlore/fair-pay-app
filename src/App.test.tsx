import "react-native";

import { render, screen } from "@testing-library/react-native";
import React from "react";

import { App } from "./App";
it("renders correctly", () => {
  render(<App />);

  const dummyText = screen.queryByText("Dummy text");
  expect(dummyText).toBeOnTheScreen();
});
