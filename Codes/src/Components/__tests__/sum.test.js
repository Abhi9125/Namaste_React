/***
 * For testing any file use syntex like below
 * use test function that take two argument
 *
 * we are importing "../sum" like this bcz it in the ssame directory.
 */

import { sum } from "../sum";

test("Calculate the sum of two numbers", () => {
  const result = sum(3, 5);

  expect(result).toBe(8);
});
