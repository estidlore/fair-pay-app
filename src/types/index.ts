interface Order {
  approved: boolean;
  customer: string;
  id: number;
  items: OrderItem[];
  tip: number;
}

interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

export type { Order, OrderItem, Product };
