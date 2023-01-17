import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import { apiData } from "utils/api/data";

import { AddItem } from ".";

describe("AddItem", () => {
  const { products } = apiData;

  it("Display inputs and labels", () => {
    expect.assertions(3);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={products} />);

    const productLabel = screen.queryByText("Product");
    expect(productLabel).toBeOnTheScreen();
    const quantityLabel = screen.queryByText("Quantity");
    expect(quantityLabel).toBeOnTheScreen();
    const quantityInput = screen.queryByPlaceholderText("Quantity");
    expect(quantityInput).toBeOnTheScreen();
  });

  it("Render null if empty options", () => {
    expect.assertions(2);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={[]} />);

    const quantityInput = screen.queryByPlaceholderText("Quantity");
    expect(quantityInput).not.toBeOnTheScreen();
    const addButton = screen.queryByPlaceholderText("+");
    expect(addButton).not.toBeOnTheScreen();
  });

  it("Add item", () => {
    expect.assertions(1);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={products} />);

    const addButton = screen.getByText("+");
    fireEvent.press(addButton);
    expect(onAddItem).toHaveBeenCalledTimes(1);
  });
});
