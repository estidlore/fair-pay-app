import { isEmpty, validateEmpty } from "./text";

describe("text form utils", () => {
  it("isEmpty", () => {
    expect.assertions(3);

    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty(" ")).toBeTruthy();
    expect(isEmpty("a")).toBeFalsy();
  });

  it("validateEmpty", () => {
    expect.assertions(3);

    expect(validateEmpty("").length).not.toBe(0);
    expect(validateEmpty(" ").length).not.toBe(0);
    expect(validateEmpty("a").length).toBe(0);
  });
});
