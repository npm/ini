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
  "b": Null Object {},
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

exports[`test/foo.js TAP encode with align > must match snapshot 1`] = `
o                    = p
a with spaces        = b  c
" xa  n          p " = "\\"\\r\\nyoyoyo\\r\\r\\n"
"[disturbing]"       = hey you never know
s                    = something
s1                   = "something'
s2                   = something else
s3                   = 
s4                   = 
s5                   = "   "
s6                   = " a "
s7                   = true
true                 = true
false                = false
null                 = null
undefined            = undefined
zr[]                 = deedee
ar[]                 = one
ar[]                 = three
ar[]                 = this is included
br                   = warm
eq                   = "eq=eq"

[a]
av   = a val
e    = { o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j    = "\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""
"[]" = a square?
cr[] = four
cr[] = eight

[a.b.c]
e = 1
j = 2

[x\\.y\\.z]
x.y.z = xyz

[x\\.y\\.z.a\\.b\\.c]
a.b.c         = abc
nocomment     = this\\; this is not a comment
noHashComment = this\\# this is not a comment

`

exports[`test/foo.js TAP encode with align and sort > must match snapshot 1`] = `
" xa  n          p " = "\\"\\r\\nyoyoyo\\r\\r\\n"
"[disturbing]"       = hey you never know
a with spaces        = b  c
ar[]                 = one
ar[]                 = three
ar[]                 = this is included
br                   = warm
eq                   = "eq=eq"
false                = false
null                 = null
o                    = p
s                    = something
s1                   = "something'
s2                   = something else
s3                   = 
s4                   = 
s5                   = "   "
s6                   = " a "
s7                   = true
true                 = true
undefined            = undefined
zr[]                 = deedee

[a]
"[]" = a square?
av   = a val
cr[] = four
cr[] = eight
e    = { o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j    = "\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""

[a.b.c]
e = 1
j = 2

[x\\.y\\.z]
x.y.z = xyz

[x\\.y\\.z.a\\.b\\.c]
a.b.c         = abc
noHashComment = this\\# this is not a comment
nocomment     = this\\; this is not a comment

`

exports[`test/foo.js TAP encode with newline > must match snapshot 1`] = `
[log]

type=file

[log.level]

label=debug
value=10

`

exports[`test/foo.js TAP encode with option > must match snapshot 1`] = `
[prefix.log]
type=file

[prefix.log.level]
label=debug
value=10

`

exports[`test/foo.js TAP encode with platform=win32 > must match snapshot 1`] = `
Array [
  "[log]",
  "type=file",
  "",
  "[log.level]",
  "label=debug",
  "value=10",
  "",
]
`

exports[`test/foo.js TAP encode with sort > must match snapshot 1`] = `
" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"
"[disturbing]"=hey you never know
a with spaces=b  c
ar[]=one
ar[]=three
ar[]=this is included
br=warm
eq="eq=eq"
false=false
null=null
o=p
s=something
s1="something'
s2=something else
s3=
s4=
s5="   "
s6=" a "
s7=true
true=true
undefined=undefined
zr[]=deedee

[a]
"[]"=a square?
av=a val
cr[]=four
cr[]=eight
e={ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j="\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""

[a.b.c]
e=1
j=2

[x\\.y\\.z]
x.y.z=xyz

[x\\.y\\.z.a\\.b\\.c]
a.b.c=abc
noHashComment=this\\# this is not a comment
nocomment=this\\; this is not a comment

`

exports[`test/foo.js TAP encode with whitespace > must match snapshot 1`] = `
[log]
type = file

[log.level]
label = debug
value = 10

`

exports[`test/foo.js TAP encode within browser context > must match snapshot 1`] = `
[log]
type=file

[log.level]
label=debug
value=10

`

exports[`test/foo.js TAP stringify with comments > must match snapshot 1`] = `
o=p
a with spaces=b  c
; wrap in quotes to JSON-decode and preserve spaces
" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"
; wrap in quotes to get a key with a bracket, not a section.
"[disturbing]"=hey you never know
; Test single quotes
s=something
; Test mixing quotes
s1="something'
; Test double quotes
s2=something else
; Test blank value
s3=
; Test value with only spaces
s4=
; Test quoted value with only spaces
s5="   "
; Test quoted value with leading and trailing spaces
s6=" a "
; Test no equal sign
s7=true
; Test bool(true)
true=true
; Test bool(false)
false=false
; Test null
null=null
; Test undefined
undefined=undefined
; Test arrays
zr[]=deedee
; This should be included in the array
ar[]=one
ar[]=three
ar[]=this is included
; Test resetting of a value (and not turn it into an array)
br=warm
eq="eq=eq"

; a section
[a]
av=a val
e={ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j="\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""
"[]"=a square?
; Nested array
cr[]=four
cr[]=eight

; nested child without middle parent
; should create otherwise-empty a.b
[a.b.c]
e=1
j=2

; dots in the section name should be literally interpreted
[x\\.y\\.z]
x.y.z=xyz

[x\\.y\\.z.a\\.b\\.c]
; nested child without middle parent
; should create otherwise-empty a.b
a.b.c=abc
; this next one is not a comment!  it's escaped!
nocomment=this\\; this is not a comment
# Support the use of the number sign (#) as an alternative to the semicolon for indicating comments.
# http://en.wikipedia.org/wiki/INI_file#Comments
# this next one is not a comment!  it's escaped!
noHashComment=this\\# this is not a comment

`
