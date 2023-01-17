import type { Product } from "types";

const products: Product[] = [
  {
    id: 1,
    name: "Lemonade",
    price: 4000
  },
  {
    id: 2,
    name: "Orange Juice",
    price: 4200
  },
  {
    id: 3,
    name: "Blackberry Juice",
    price: 4400
  },
  {
    id: 4,
    name: "Beef",
    price: 15000
  },
  {
    id: 5,
    name: "Soup",
    price: 6000
  },
  {
    id: 6,
    name: "Salad",
    price: 5000
  }
];

const tables = Array.from({ length: 7 }, (_, i) => i + 1);

const apiData = { products, tables };

export { apiData };
