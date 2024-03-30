import { expect, test } from "vitest";
import { product } from "./product";

test("products 2 * 3 to equal 6", () => {
  expect(product(2, 3)).toBe(6);
});

test("products 2 * 4 to equal 8", () => {
  expect(product(2, 4)).toBe(8);
});