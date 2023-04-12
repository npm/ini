/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/duplicate-properties.js TAP decode duplicate properties with bracketedArray=false > must match snapshot 1`] = `
Null Object {
  "ar": Array [
    "three",
  ],
  "ar[]": "one",
  "b": Array [
    "2",
    "3",
    "3",
  ],
  "brr": "1",
  "str": "3",
  "zr": "123",
  "zr[]": "deedee",
}
`

exports[`test/duplicate-properties.js TAP decode with duplicate properties > must match snapshot 1`] = `
Null Object {
  "ar": Array [
    "one",
    "three",
  ],
  "brr": "3",
  "str": "3",
  "zr": Array [
    "deedee",
    "123",
  ],
}
`

exports[`test/duplicate-properties.js TAP encode duplicate properties with bracketedArray=false > must match snapshot 1`] = `
ar=1
ar=2
ar=3
br=1
br=2

`

exports[`test/duplicate-properties.js TAP encode with duplicate properties > must match snapshot 1`] = `
ar[]=1
ar[]=2
ar[]=3
br[]=1
br[]=2

`
