interface ArrayReducerAction<T extends ArrayReducerType> {
  payload: number | T;
  type: "ADD" | "EDIT" | "DELETE";
}

interface ArrayReducerType {
  id: number;
}

export type { ArrayReducerAction, ArrayReducerType };
