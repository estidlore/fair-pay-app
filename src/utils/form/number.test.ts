import { isGreaterOrEqual, validateGreaterOrEqual } from "./number";

describe("number form utils", () => {
  it("isGreaterOrEqual", () => {
    expect.assertions(3);

    expect(isGreaterOrEqual(0, -1)).toBeTruthy();
    expect(isGreaterOrEqual(0, 0)).toBeTruthy();
    expect(isGreaterOrEqual(0, 1)).toBeFalsy();
  });

  it("validateGreaterOrEqual", () => {
    expect.assertions(3);

    expect(validateGreaterOrEqual(0, -1).length).toBe(0);
    expect(validateGreaterOrEqual(0, 0).length).toBe(0);
    expect(validateGreaterOrEqual(0, 1).length).not.toBe(0);
  });
});
