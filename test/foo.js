var eol = process.platform === "win32" ? "\r\n" : "\n";
var i = require("../")
  , tap = require("tap")
  , test = tap.test
  , fs = require("fs")
  , path = require("path")
  , fixture = path.resolve(__dirname, "./fixtures/foo.ini")
  , data = fs.readFileSync(fixture, "utf8")
  , d
  , expectE = 'o=p' + eol
            + 'a with spaces=b  c' + eol
            + '" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"' + eol
            + '"[disturbing]"=hey you never know' + eol
            + 's=something' + eol
            + 's1=\"something\'' + eol
            + 's2=something else' + eol
            + 'zr[]=deedee\n'
            + 'ar[]=one\n'
            + 'ar[]=three\n'
            + 'ar[]=this is included\n'
            + 'br=warm' + eol
            + eol
            + '[a]' + eol
            + 'av=a val' + eol
            + 'e={ o: p, a: '
            + '{ av: a val, b: { c: { e: "this [value]" '
            + '} } } }' + eol + 'j="\\"{ o: \\"p\\", a: { av:'
            + ' \\"a val\\", b: { c: { e: \\"this [value]'
            + '\\" } } } }\\""' + eol + '"[]"=a square?' + eol
            + 'cr[]=four\ncr[]=eight\n' + eol
            +'[a.b.c]'+ eol + 'e=1' + eol
            + 'j=2' + eol + eol + '[x\\.y\\.z]' + eol + 'x.y.z=xyz' + eol + eol
            + '[x\\.y\\.z.a\\.b\\.c]' + eol + 'a.b.c=abc' + eol
            + 'nocomment=this\\; this is not a comment' + eol
            + 'noHashComment=this\\# this is not a comment' + eol
  , expectD =
    { o: 'p',
      'a with spaces': 'b  c',
      " xa  n          p ":'"\r\nyoyoyo\r\r\n',
      '[disturbing]': 'hey you never know',
      's': 'something',
      's1' : '\"something\'',
      's2': 'something else',
      'zr': ['deedee'],
      'ar': ['one', 'three', 'this is included'],
      'br': 'warm',
      a:
       { av: 'a val',
         e: '{ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }',
         j: '"{ o: "p", a: { av: "a val", b: { c: { e: "this [value]" } } } }"',
         "[]": "a square?",
         cr: ['four', 'eight'],
         b: { c: { e: '1', j: '2' } } },
      'x.y.z': {
        'x.y.z': 'xyz',
        'a.b.c': {
          'a.b.c': 'abc',
          'nocomment': 'this\; this is not a comment',
          noHashComment: 'this\# this is not a comment'
        }
      }
    }
  , expectF = '[prefix.log]' + eol
            + 'type=file' + eol + eol
            + '[prefix.log.level]' + eol
            + 'label=debug' + eol
            + 'value=10' + eol
  , expectG = '[log]' + eol
            + 'type = file' + eol + eol
            + '[log.level]' + eol
            + 'label = debug' + eol
            + 'value = 10' + eol

test("decode from file", function (t) {
  var d = i.decode(data)
  t.deepEqual(d, expectD)
  t.end()
})

test("encode from data", function (t) {
  var e = i.encode(expectD)
  t.deepEqual(e, expectE)

  var obj = {log: { type:'file', level: {label:'debug', value:10} } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), eol, 'Never a blank first line')
  t.notEqual(e.slice(-2), eol + eol, 'Never a blank final line')

  t.end()
})

test("encode with option", function (t) {
  var obj = {log: { type:'file', level: {label:'debug', value:10} } }
  e = i.encode(obj, {section: 'prefix'})

  t.equal(e, expectF)
  t.end()
})

test("encode with whitespace", function (t) {
  var obj = {log: { type:'file', level: {label:'debug', value:10} } }
  e = i.encode(obj, {whitespace: true})

  t.equal(e, expectG)
  t.end()
})
