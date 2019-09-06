
import appendM from "./index";

test("works", () => {
  expect(appendM("a")([])).toEqual(["a"]);
});

test("works", () => {
  expect(appendM("b")(["a"])).toEqual(["a", "b"]);
});
