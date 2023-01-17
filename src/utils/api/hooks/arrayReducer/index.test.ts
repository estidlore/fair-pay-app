import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import type { Product } from "types";
import { apiData } from "utils/api/data";

import { arrayReducer, useArrayReducer } from ".";

describe("arrayReducer", () => {
  const initialState = apiData.products;
  const addPayload: Product = {
    id: 10,
    name: "Fruit",
    price: 3000
  };
  const editPayload: Product = {
    ...addPayload,
    price: 3500
  };
  const deletePayload = addPayload.id;

  const afterAddState = [...initialState, addPayload];
  const afterEditState = [...initialState, editPayload];
  const afterDeleteState = initialState;

  describe("arrayReducer", () => {
    it("add element", () => {
      expect.assertions(1);

      const newState = arrayReducer(initialState, {
        payload: addPayload,
        type: "ADD"
      });
      expect(newState).toStrictEqual(afterAddState);
    });

    it("edit element", () => {
      expect.assertions(1);

      const newState = arrayReducer(afterAddState, {
        payload: editPayload,
        type: "EDIT"
      });
      expect(newState).toStrictEqual(afterEditState);
    });

    it("delete element", () => {
      expect.assertions(1);

      const newState = arrayReducer(afterEditState, {
        payload: deletePayload,
        type: "DELETE"
      });
      expect(newState).toStrictEqual(afterDeleteState);
    });
  });

  describe("useArrayReducer", () => {
    it("add element", () => {
      expect.assertions(1);
      const { result } = renderHook(() => useArrayReducer(initialState));

      act(() => {
        const addDispatch = result.current[1];
        addDispatch(addPayload);
      });

      const newState = result.current[0];
      expect(newState).toStrictEqual(afterAddState);
    });

    it("edit element", () => {
      expect.assertions(1);
      const { result } = renderHook(() => useArrayReducer(afterAddState));

      act(() => {
        const editDispatch = result.current[3];
        editDispatch(editPayload);
      });

      const newState = result.current[0];
      expect(newState).toStrictEqual(afterEditState);
    });

    it("delete element", () => {
      expect.assertions(1);
      const { result } = renderHook(() => useArrayReducer(afterEditState));

      act(() => {
        const deleteDispatch = result.current[2];
        deleteDispatch(deletePayload);
      });

      const newState = result.current[0];
      expect(newState).toStrictEqual(afterDeleteState);
    });
  });
});
