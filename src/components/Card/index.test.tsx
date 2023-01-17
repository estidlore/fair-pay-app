import { render, screen } from "@testing-library/react-native";
import React, { Fragment } from "react";
import { Text } from "react-native";

import { Button } from "components/Button";

import { Card } from ".";

describe("Card", () => {
  it("Display header and content", () => {
    expect.assertions(2);

    render(
      <Card header={"John's order"}>
        <Text>{"Order details"}</Text>
      </Card>
    );

    const header = screen.getByText("John's order");
    expect(header).toBeOnTheScreen();
    const content = screen.getByText("Order details");
    expect(content).toBeOnTheScreen();
  });

  it("Display action buttons", () => {
    expect.assertions(2);

    render(
      <Card
        actionButtons={
          <Fragment>
            <Button>{"Save"}</Button>
            <Button>{"Cancel"}</Button>
          </Fragment>
        }
      />
    );

    const button1 = screen.getByText("Save");
    expect(button1).toBeOnTheScreen();
    const button2 = screen.getByText("Cancel");
    expect(button2).toBeOnTheScreen();
  });
});
