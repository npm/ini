/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/stringify-with-comments.js TAP stringify with comments > must match snapshot 1`] = `
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
zr[]=deedee
ar[]=one
ar[]=three
ar[]=this is included
; Test arrays
; This should be included in the array
; Test resetting of a value (and not turn it into an array)
br=warm
eq="eq=eq"

; a section
[a]
av=a val
e={ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }
j="\\"{ o: \\"p\\", a: { av: \\"a val\\", b: { c: { e: \\"this [value]\\" } } } }\\""
"[]"=a square?
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
