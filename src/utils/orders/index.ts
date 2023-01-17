import type { Order, OrderItem, Product } from "types";

const getNonOrderedProducts = (
  products: Product[],
  items: OrderItem[]
): Product[] => {
  return products.filter(({ id }) => {
    const itemsWithProduct = items.filter((item) => item.product.id === id);
    return itemsWithProduct.length === 0;
  });
};

const getSubtotalPrice = (items: OrderItem[]): number => {
  const itemsPrice = items.map((item) => item.quantity * item.product.price);
  return itemsPrice.reduce((prev, curr) => (curr += prev), 0);
};

const splitOrdersByApproval = (orders: Order[]): [Order[], Order[]] => {
  const approved = orders.filter(({ approved }) => approved);
  const nonApproved = orders.filter(({ approved }) => !approved);
  return [approved, nonApproved];
};

export { getNonOrderedProducts, getSubtotalPrice, splitOrdersByApproval };
