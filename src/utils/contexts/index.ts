import { createContext } from "react";

import type { TableContextValue } from "./types";

const TableContext = createContext<TableContextValue>({
  orders: []
});

export { TableContext };
