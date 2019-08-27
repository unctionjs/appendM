
import {test} from "tap";

import appendM from "./";

test(({same, end}) => {
  same(appendM("a")([]), ["a"]);

  end();
});

test(({same, end}) => {
  same(appendM("b")(["a"]), ["a", "b"]);

  end();
});
