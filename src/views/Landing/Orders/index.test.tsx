import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Orders } from ".";

describe("Orders", () => {
  it("Display content", () => {
    expect.assertions(4);

    render(<Orders />);

    const checksHeader = screen.getByText("Checks");
    expect(checksHeader).toBeOnTheScreen();
    const ordersHeader = screen.getByText("Orders");
    expect(ordersHeader).toBeOnTheScreen();
    const checksFallback = screen.getByText("There are not checks currently");
    expect(checksFallback).toBeOnTheScreen();
    const ordersFallback = screen.getByText("There are not orders currently");
    expect(ordersFallback).toBeOnTheScreen();
  });
});
