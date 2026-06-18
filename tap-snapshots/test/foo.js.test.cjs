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
    "r
     oyoyor\\r
    
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
  "multiline": Null Object {
    "alpha": Null Object {
      "a1": "one",
      "a2": "two",
      "a3": "three",
      "b1": "two",
      "five": String(
        line1
          line2
        \\tline3
            line4
        \\t  line5
      ),
      "two": String(
        first
          second
      ),
    },
    "array": Null Object {
      "good": true,
      "line2": true,
      "line3": true,
      "list": Array [
        "item1",
        "line1",
        "ok",
        String(
          good
           indented
        ),
      ],
    },
    "beta": Null Object {
      "b1": "after",
      "mstart": String(
        top
          middle
        \\tbottom
      ),
    },
    "delta": Null Object {
      "d1": "whitespace on following newline",
      "d2": "done",
      "dml": "first",
      "second": true,
      "third": true,
    },
    "gamma": Null Object {
      "g1": "before",
      "mnext": String(
        x
            y
        \\tz
      ),
    },
  },
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

exports[`test/foo.js TAP decode from file with multiline disabled > must match snapshot 1`] = `
Null Object {
  " xa  n          p ": String(
    "r
     oyoyor\\r
    
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
  "multiline": Null Object {
    "alpha": Null Object {
      "a1": "one",
      "a2": "two",
      "a3": "three",
      "b1": "two",
      "five": "line1",
      "line2": true,
      "line3": true,
      "line4": true,
      "line5": true,
      "multiline value across": true,
      "second": true,
      "three lines": true,
      "two": "first",
    },
    "array": Null Object {
      "good": true,
      "line2": true,
      "line3": true,
      "list": Array [
        "item1",
        "line1",
        "ok",
        String(
          good
           indented
        ),
      ],
    },
    "beta": Null Object {
      "b1": "after",
      "bottom": true,
      "middle": true,
      "mstart": "top",
    },
    "delta": Null Object {
      "d1": "whitespace on following newline",
      "d2": "done",
      "dml": "first",
      "second": true,
      "third": true,
    },
    "gamma": Null Object {
      "g1": "before",
      "mnext": "x",
      "y": true,
      "z": true,
    },
  },
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
" xa  n          p "="r
 oyoyor

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

[multiline.alpha]
a1=one
a2=two
b1=two
two=first
  second
five=line1
  line2
	line3
    line4
	  line5
a3=three

[multiline.beta]
mstart=top
  middle
	bottom
b1=after

[multiline.gamma]
g1=before
mnext=x
    y
	z

[multiline.delta]
dml=first
second=true
third=true
d1=whitespace on following newline
d2=done

[multiline.array]
list[]=item1
list[]=line1
list[]=ok
list[]=good
 indented
line2=true
line3=true
good=true

`

exports[`test/foo.js TAP encode with align > must match snapshot 1`] = `
o                    = p
a with spaces        = b  c
" xa  n          p " = "r
 oyoyor

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

[multiline.alpha]
a1   = one
a2   = two
b1   = two
two  = first
  second
five = line1
  line2
	line3
    line4
	  line5
a3   = three

[multiline.beta]
mstart = top
  middle
	bottom
b1     = after

[multiline.gamma]
g1    = before
mnext = x
    y
	z

[multiline.delta]
dml    = first
second = true
third  = true
d1     = whitespace on following newline
d2     = done

[multiline.array]
list[] = item1
list[] = line1
list[] = ok
list[] = good
 indented
line2  = true
line3  = true
good   = true

`

exports[`test/foo.js TAP encode with align and sort > must match snapshot 1`] = `
" xa  n          p " = "r
 oyoyor

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

[multiline.alpha]
a1   = one
a2   = two
a3   = three
b1   = two
five = line1
  line2
	line3
    line4
	  line5
two  = first
  second

[multiline.array]
good   = true
line2  = true
line3  = true
list[] = item1
list[] = line1
list[] = ok
list[] = good
 indented

[multiline.beta]
b1     = after
mstart = top
  middle
	bottom

[multiline.delta]
d1     = whitespace on following newline
d2     = done
dml    = first
second = true
third  = true

[multiline.gamma]
g1    = before
mnext = x
    y
	z

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
" xa  n          p "="r
 oyoyor

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

[multiline.alpha]
a1=one
a2=two
a3=three
b1=two
five=line1
  line2
	line3
    line4
	  line5
two=first
  second

[multiline.array]
good=true
line2=true
line3=true
list[]=item1
list[]=line1
list[]=ok
list[]=good
 indented

[multiline.beta]
b1=after
mstart=top
  middle
	bottom

[multiline.delta]
d1=whitespace on following newline
d2=done
dml=first
second=true
third=true

[multiline.gamma]
g1=before
mnext=x
    y
	z

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

exports[`test/foo.js TAP legacy encode preserves problematic multiline entry > must match snapshot 1`] = `
Array [
  "\\" xa  n          p \\"=\\"\\\\\\"\\\\r\\\\nyoyoyo\\\\r\\\\r\\\\n\\"",
  "",
]
`
