import type { Reducer } from "react";
import { useCallback, useReducer } from "react";

import type { ArrayReducerAction, ArrayReducerType } from "./types";

/**
 * Defines CRUD operations over a dataset
 * @param state dataset to be managed
 * @param action provides how the state will be modified
 * @returns new state after the current state is modified by the action
 */
const arrayReducer = <T extends ArrayReducerType>(
  state: T[],
  action: ArrayReducerAction<T>
): T[] => {
  const { payload } = action;
  switch (action.type) {
    case "ADD": {
      if (typeof payload === "number") {
        return state;
      }
      return [...state, payload];
    }
    case "DELETE": {
      if (typeof payload !== "number") {
        return state;
      }
      return state.filter((el) => el.id !== payload);
    }
    case "EDIT": {
      if (typeof payload === "number") {
        return state;
      }
      return state.map((el) => (el.id === payload.id ? payload : el));
    }
  }
};

/**
 * Extends useReducer for CRUD operations over arrays of objects
 * @param initialValue the initial state taken
 * @returns state followed by add, delete and edit dispatches
 */
const useArrayReducer = <T extends ArrayReducerType>(
  initialValue: T[] = []
): [
  T[],
  (payload: T) => void,
  (payload: number) => void,
  (payload: T) => void
] => {
  const [state, dispatch] = useReducer<Reducer<T[], ArrayReducerAction<T>>>(
    arrayReducer,
    initialValue
  );

  const addDispatch = useCallback((payload: T) => {
    dispatch({
      payload,
      type: "ADD"
    });
  }, []);

  const deleteDispatch = useCallback((payload: number) => {
    dispatch({
      payload,
      type: "DELETE"
    });
  }, []);

  const editDispatch = useCallback((payload: T) => {
    dispatch({
      payload,
      type: "EDIT"
    });
  }, []);

  return [state, addDispatch, deleteDispatch, editDispatch];
};

export { arrayReducer, useArrayReducer };
