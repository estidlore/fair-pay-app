import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import { Button } from ".";

describe("Button", () => {
  it("Display content", () => {
    expect.assertions(1);

    render(<Button>{"Press me"}</Button>);

    const button = screen.getByText("Press me");
    expect(button).toBeOnTheScreen();
  });

  it("Fire onPress", () => {
    expect.assertions(1);
    const onPress = jest.fn();

    render(<Button onPress={onPress}>{"Press me"}</Button>);

    const button = screen.getByText("Press me").parent;
    if (button !== null) {
      fireEvent.press(button);
    }
    expect(onPress).toBeCalledTimes(1);
  });

  it("Be disabled", () => {
    expect.assertions(2);
    const onPress = jest.fn();

    render(
      <Button disabled={true} onPress={onPress}>
        {"Press me"}
      </Button>
    );

    const button = screen.getByText("Press me").parent;
    expect(button).toBeDisabled();
    if (button !== null) {
      fireEvent.press(button);
    }
    expect(onPress).toBeCalledTimes(0);
  });
});
