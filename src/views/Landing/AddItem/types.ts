import type { OrderItem, Product } from "types";

interface AddItemProps {
  onAddItem: (item: OrderItem) => void;
  options: Product[];
}

export type { AddItemProps };
