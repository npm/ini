/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/foo.js TAP decode from file > must match snapshot 1`] = `
Null Object {
  " xa  n          p ": String(
    "\\r
    yoyoyo\\r\\r
    
  ),
  "[disturbing]": "hey you never know",
  "a": Null Object {
    "[]": "a square?",
    "av": "a val",
    "b": Null Object {
      "c": Null Object {
        "e": "1",
        "j": "2",
      },
    },
    "cr": Array [
      "four",
      "eight",
    ],
    "e": "{ o: p, a: { av: a val, b: { c: { e: \\"this [value]\\" } } } }",
    "j": "\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\"",
  },
  "a with spaces": "b  c",
  "ar": Array [
    "one",
    "three",
    "this is included",
  ],
  "br": "warm",
  "eq": "eq=eq",
  "false": false,
  "null": null,
  "o": "p",
  "s": "something",
  "s1": "\\"something'",
  "s2": "something else",
  "s3": "",
  "s4": "",
  "s5": "   ",
  "s6": " a ",
  "s7": true,
  "true": true,
  "undefined": "undefined",
  "x.y.z": Null Object {
    "a.b.c": Null Object {
      "a.b.c": "abc",
      "nocomment": "this; this is not a comment",
      "noHashComment": "this# this is not a comment",
    },
    "x.y.z": "xyz",
  },
  "zr": Array [
    "deedee",
  ],
}
`

exports[`test/foo.js TAP encode from data > must match snapshot 1`] = `
o=p
a with spaces=b  c
" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"
"[disturbing]"=hey you never know
s=something
s1="something'
s2=something else
s3=
s4=
s5="   "
s6=" a "
s7=true
true=true
false=false
null=null
undefined=undefined
zr[]=deedee
ar[]=one
ar[]=three
ar[]=this is included
br=warm
eq="eq=eq"

[a]
av=a val
e={ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j="\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""
"[]"=a square?
cr[]=four
cr[]=eight

[a.b.c]
e=1
j=2

[x\\.y\\.z]
x.y.z=xyz

[x\\.y\\.z.a\\.b\\.c]
a.b.c=abc
nocomment=this\\; this is not a comment
noHashComment=this\\# this is not a comment

`

exports[`test/foo.js TAP encode with option > must match snapshot 1`] = `
[prefix.log]
type=file

[prefix.log.level]
label=debug
value=10

`

exports[`test/foo.js TAP encode with whitespace > must match snapshot 1`] = `
[log]
type = file

[log.level]
label = debug
value = 10

`
