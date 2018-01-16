# @unction/appendM

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ValueType => ArrayType => ArrayType

Takes an array and an item and returns the combination of both, appended.

NOTE: This mutates the array

``` javascript
const data = [1, 2, 3]

appendM(4)(data)
```

Would return:

``` javascript
[1, 2, 3, 4]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/appendM.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/appendM.svg?maxAge=2592000&style=flat-square
