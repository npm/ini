var i = require('../'),
  tap = require('tap'),
  test = tap.test,
  fs = require('fs'),
  path = require('path'),
  fixture = path.resolve(__dirname, './fixtures/foo.ini'),
  data = fs.readFileSync(fixture, 'utf8'),
  d,
  expectE = 'o=p\n' +
            'a with spaces=b  c\n' +
            '" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"\n' +
            '"[disturbing]"=hey you never know\n' +
            's=something\n' +
            's1=\"something\'\n' +
            's2=something else\n' +
            'zr[]=deedee\n' +
            'ar[]=one\n' +
            'ar[]=three\n' +
            'ar[]=this is included\n' +
            'br=warm\n' +
            'eq=\"eq=eq\"\n' +
            '\n' +
            '[a]\n' +
            'av=a val\n' +
            'e={ o: p, a: ' +
            '{ av: a val, b: { c: { e: "this [value]" ' +
            '} } } }\nj="\\"{ o: \\"p\\", a: { av:' +
            ' \\"a val\\", b: { c: { e: \\"this [value]' +
            '\\" } } } }\\""\n"[]"=a square?\n' +
            'cr[]=four\ncr[]=eight\n\n' +
            '[a.b.c]\ne=1\n' +
            'j=2\n\n[x\\.y\\.z]\nx.y.z=xyz\n\n' +
            '[x\\.y\\.z.a\\.b\\.c]\na.b.c=abc\n' +
            'nocomment=this\\; this is not a comment\n' +
            'noHashComment=this\\# this is not a comment\n\n' +
            '[filters.boolean]\n' +
            'bnt1=YES\n' +
            'bnt2=Yes\n' +
            'bnt3=yes\n' +
            'bnt4=ON\n' +
            'bnt5=On\n' +
            'bnt6=on\n' +
            'bnt7=TRUE\n' +
            'bnt8=True\n' +
            'bnt9=true\n' +
            'bnf1=OFF\n' +
            'bnf2=Off\n' +
            'bnf3=off\n' +
            'bnf4=NO\n' +
            'bnf5=No\n' +
            'bnf6=no\n' +
            'bnf7=FALSE\n' +
            'bnf8=False\n' +
            'bnf9=false\n' +
            'bnf10=NONE\n' +
            'bnf11=None\n' +
            'bnf12=none\n',
  expectD =
  { o: 'p',
    'a with spaces': 'b  c',
    ' xa  n          p ': '"\r\nyoyoyo\r\r\n',
    '[disturbing]': 'hey you never know',
    's': 'something',
    's1': '\"something\'',
    's2': 'something else',
    'zr': ['deedee'],
    'ar': ['one', 'three', 'this is included'],
    'br': 'warm',
    'eq': 'eq=eq',
    a:
    { av: 'a val',
      e: '{ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }',
      j: '"{ o: "p", a: { av: "a val", b: { c: { e: "this [value]" } } } }"',
      '[]': 'a square?',
      cr: ['four', 'eight'],
      b: { c: { e: '1', j: '2' } } },
    'x.y.z': {
      'x.y.z': 'xyz',
      'a.b.c': {
        'a.b.c': 'abc',
        'nocomment': 'this\; this is not a comment',
        noHashComment: 'this\# this is not a comment'
      }
    },
    filters: {
      boolean: {
        bnt1: 'YES',
        bnt2: 'Yes',
        bnt3: 'yes',
        bnt4: 'ON',
        bnt5: 'On',
        bnt6: 'on',
        bnt7: 'TRUE',
        bnt8: 'True',
        bnt9: true,
        bnf1: 'OFF',
        bnf2: 'Off',
        bnf3: 'off',
        bnf4: 'NO',
        bnf5: 'No',
        bnf6: 'no',
        bnf7: 'FALSE',
        bnf8: 'False',
        bnf9: false,
        bnf10: 'NONE',
        bnf11: 'None',
        bnf12: 'none'
      }
    }
  },
  expectF = '[prefix.log]\n' +
            'type=file\n\n' +
            '[prefix.log.level]\n' +
            'label=debug\n' +
            'value=10\n',
  expectG = '[log]\n' +
            'type = file\n\n' +
            '[log.level]\n' +
            'label = debug\n' +
            'value = 10\n',
  expectH = {
    bnt1: true,
    bnt2: true,
    bnt3: true,
    bnt4: true,
    bnt5: true,
    bnt6: true,
    bnt7: true,
    bnt8: true,
    bnt9: true,
    bnf1: false,
    bnf2: false,
    bnf3: false,
    bnf4: false,
    bnf5: false,
    bnf6: false,
    bnf7: false,
    bnf8: false,
    bnf9: false,
    bnf10: false,
    bnf11: false,
    bnf12: false
  }

test('decode from file', function (t) {
  var d = i.decode(data)
  t.deepEqual(d, expectD)
  t.end()
})

test('decode from file with array', function (t) {
    var d = i.decode(data, [])
    t.deepEqual(d, expectD)
    t.end()
})

test('decode with zendBoolean', function (t) {
  var d = i.decode(data, i.filters.decode.zendBoolean)

  t.deepEqual(d.filters.boolean, expectH)
  t.end()
})

test('encode from data', function (t) {
  var e = i.encode(expectD)
  t.deepEqual(e, expectE)

  var obj = {log: { type: 'file', level: {label: 'debug', value: 10} } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), '\n', 'Never a blank first line')
  t.notEqual(e.slice(-2), '\n\n', 'Never a blank final line')

  t.end()
})

test('encode with option', function (t) {
  var obj = {log: { type: 'file', level: {label: 'debug', value: 10} } }
  e = i.encode(obj, {section: 'prefix'})

  t.equal(e, expectF)
  t.end()
})

test('encode with whitespace', function (t) {
  var obj = {log: { type: 'file', level: {label: 'debug', value: 10} } }
  e = i.encode(obj, {whitespace: true})

  t.equal(e, expectG)
  t.end()
})
