/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import appendM from "./source.js"

test(({same, end}) => {
  same(appendM("a")([]), ["a"])

  end()
})

test(({same, end}) => {
  same(appendM("b")(["a"]), ["a", "b"])

  end()
})
