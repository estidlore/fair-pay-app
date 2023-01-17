import type { Product } from "types";

import { fetchApi } from ".";
import { apiData } from "./data";

describe("fetchApi", () => {
  it("Load products", async () => {
    const { products } = apiData;
    expect.assertions(1 + products.length * 2);

    return fetchApi("products")
      .then(async (res) => res.json())
      .then((data: Product[]) => {
        expect(data.length).toBe(products.length);
        data.forEach((el, index) => {
          expect(products[index].id).toBe(el.id);
          expect(products[index].name).toBe(el.name);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });

  it("Load tables", async () => {
    const { tables } = apiData;
    expect.assertions(tables.length + 1);

    return fetchApi("tables")
      .then(async (res) => res.json())
      .then((data: number[]) => {
        expect(data.length).toBe(tables.length);
        data.forEach((el, index) => {
          expect(data[index]).toBe(el);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
