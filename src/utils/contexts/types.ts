import type { Order } from "types";

interface TableContextValue {
  addOrder?: (order: Order) => void;
  deleteOrder?: (orderId: number) => void;
  editOrder?: (order: Order) => void;
  orders: Order[];
}

export type { TableContextValue };
