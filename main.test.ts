import { returnOne } from "./main";

it("should be 1", () => {
  const actual = returnOne();
  expect(actual).toBe(1);
});
