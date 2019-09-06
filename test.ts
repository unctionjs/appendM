
import appendM from "./index";

test(() => {
  expect(appendM("a")([])).toEqual(["a"]);
});

test(() => {
  expect(appendM("b")(["a"])).toEqual(["a", "b"]);
});
