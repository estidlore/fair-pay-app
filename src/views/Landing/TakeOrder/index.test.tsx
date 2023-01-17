import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import { TakeOrder } from ".";

describe("TakeOrder", () => {
  it("Display content", () => {
    expect.assertions(2);
    const onCancel = jest.fn();

    render(<TakeOrder onCancel={onCancel} />);

    const customerLabel = screen.queryByText("Customer");
    expect(customerLabel).toBeOnTheScreen();
    const customerInput = screen.queryByPlaceholderText("John Doe");
    expect(customerInput).toBeOnTheScreen();
  });

  it("Cancel order", () => {
    expect.assertions(1);
    const onCancel = jest.fn();

    render(<TakeOrder onCancel={onCancel} />);

    const cancelButton = screen.getByText("Cancel order");
    fireEvent.press(cancelButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
