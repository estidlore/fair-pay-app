import type { Order, OrderItem } from "types";
import { apiData } from "utils/api/data";

import {
  getNonOrderedProducts,
  getSubtotalPrice,
  splitOrdersByApproval
} from ".";

describe("orders utils", () => {
  const { products } = apiData;
  const items: OrderItem[] = [
    {
      id: 1,
      product: products[1],
      quantity: 2
    },
    {
      id: 2,
      product: products[2],
      quantity: 3
    }
  ];
  const orders: Order[] = [
    {
      approved: false,
      customer: "John Doe",
      id: 1,
      items: [],
      tip: 10000
    },
    {
      approved: true,
      customer: "Jane Dane",
      id: 2,
      items: [],
      tip: 5000
    }
  ];

  it("getNonOrderedProducts", () => {
    expect.assertions(1);

    const nonOrderedProducts = getNonOrderedProducts(products, items);
    const expectedProducts = products.filter(
      ({ id }) => id !== products[1].id && id !== products[2].id
    );
    expect(nonOrderedProducts).toStrictEqual(expectedProducts);
  });

  it("getSubtotalPrice", () => {
    expect.assertions(1);

    const subtotal = getSubtotalPrice(items);
    const expectedSubtotal = products[1].price * 2 + products[2].price * 3;
    expect(subtotal).toBe(expectedSubtotal);
  });

  it("splitOrdersByApproval", () => {
    expect.assertions(2);

    const [approvedOrders, nonApprovedOrders] = splitOrdersByApproval(orders);
    expect(approvedOrders[0]).toStrictEqual(orders[1]);
    expect(nonApprovedOrders[0]).toStrictEqual(orders[0]);
  });
});
