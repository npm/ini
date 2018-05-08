var i = require("../")
  , tap = require("tap")
  , test = tap.test
  , fs = require("fs")
  , eol = require('os').EOL
  , path = require("path")
  , fixture = path.resolve(__dirname, "./fixtures/foo.ini")
  , data = fs.readFileSync(fixture, "utf8")
  , d
  , expectIisArray = 'o=p'+eol
    + 'a with spaces=b  c'+eol
    + '" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"'+eol
    + '"[disturbing]"=hey you never know'+eol
    + 's=something'+eol
    + 's1=\"something\''+eol
    + 's2=something else'+eol
    + 'zr=deedee'+eol
    + 'ar=one'+eol
    + 'ar=three'+eol
    + 'ar=this is included'+eol
    + 'br=warm'+eol
    + 'eq=\"eq=eq\"'+eol
    + ''+eol
    + '[a]'+eol
    + 'av=a val'+eol
    + 'e={ o: p, a: '
    + '{ av: a val, b: { c: { e: "this [value]" '
    + '} } } }'+eol+'j="\\"{ o: \\"p\\", a: { av:'
    + ' \\"a val\\", b: { c: { e: \\"this [value]'
    + '\\" } } } }\\""'+eol+'"[]"=a square?'+eol
    + 'cr=four'+eol+'cr=eight'+eol+eol
    + '[a.b.c]'+eol
    + 'e=1'+eol
    + 'j=2'+eol+eol
    + '[x\\.y\\.z]'+eol
    + 'x.y.z=xyz'+eol+eol
    + '[x\\.y\\.z.a\\.b\\.c]'+eol
    + 'a.b.c=abc'+eol
    + 'nocomment=this\\; this is not a comment'+eol
    + 'noHashComment=this\\# this is not a comment'+eol
  , expectI = 'o=p'+eol
    + 'a with spaces=b  c'+eol
    + '" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"'+eol
    + '"[disturbing]"=hey you never know'+eol
    + 's=something'+eol
    + 's1=\"something\''+eol
    + 's2=something else'+eol
    + 'zr[]=deedee'+eol
    + 'ar[]=one'+eol
    + 'ar[]=three'+eol
    + 'ar[]=this is included'+eol
    + 'br=warm'+eol
    + 'eq=\"eq=eq\"'+eol
    + ''+eol
    + '[a]'+eol
    + 'av=a val'+eol
    + 'e={ o: p, a: '
    + '{ av: a val, b: { c: { e: "this [value]" '
    + '} } } }'+eol+'j="\\"{ o: \\"p\\", a: { av:'
    + ' \\"a val\\", b: { c: { e: \\"this [value]'
    + '\\" } } } }\\""'+eol+'"[]"=a square?'+eol
    + 'cr[]=four'+eol+'cr[]=eight'+eol+eol
    + '[a.b.c]'+eol
    + 'e=1'+eol
    + 'j=2'+eol+eol
    + '[x\\.y\\.z]'+eol
    + 'x.y.z=xyz'+eol+eol
    + '[x\\.y\\.z.a\\.b\\.c]'+eol
    + 'a.b.c=abc'+eol
    + 'nocomment=this\\; this is not a comment'+eol
    + 'noHashComment=this\\# this is not a comment'+eol
  , expectE = 'o=p'+eol
    + 'a with spaces=b  c'+eol
    + '" xa  n          p "="\\"\\r\\nyoyoyo\\r\\r\\n"'+eol
    + '"[disturbing]"=hey you never know'+eol
    + 's=something'+eol
    + 's1=\"something\''+eol
    + 's2=something else'+eol
    + 'zr[]=deedee'+eol
    + 'ar[]=one'+eol
    + 'ar[]=three'+eol
    + 'ar[]=this is included'+eol
    + 'br=warm'+eol
    + 'eq=\"eq=eq\"'+eol
    + ''+eol
    + '[a]'+eol
    + 'av=a val'+eol
    + 'e={ o: p, a: '
    + '{ av: a val, b: { c: { e: "this [value]" '
    + '} } } }'+eol+'j="\\"{ o: \\"p\\", a: { av:'
    + ' \\"a val\\", b: { c: { e: \\"this [value]'
    + '\\" } } } }\\""'+eol+'"[]"=a square?'+eol
    + 'cr[]=four'+eol+'cr[]=eight'+eol+eol
    + '[a.b.c]'+eol
    + 'e=1'+eol
    + 'j=2'+eol+eol
    + '[x\\.y\\.z]'+eol
    + 'x.y.z=xyz'+eol+eol
    + '[x\\.y\\.z.a\\.b\\.c]'+eol
    + 'a.b.c=abc'+eol
    + 'nocomment=this\\; this is not a comment'+eol
    + 'noHashComment=this\\# this is not a comment'+eol
  , expectH = '[Match]'+eol
    +'Name=eth0'+eol+eol
    +'[Network]'+eol
    +'DHCP=no'+eol
    +'Address=192.168.1.75/24'+eol
    +'Gateway=192.168.1.1'+eol
    +'DNS=8.8.8.8'+eol
    +'DNS=8.8.4.4'+eol
  , expectHisArray = '[Match]'+eol
    +'Name=eth0'+eol+eol
    +'[Network]'+eol
    +'DHCP=no'+eol
    +'Address=192.168.1.75/24'+eol
    +'Gateway=192.168.1.1'+eol
    +'DNS[]=8.8.8.8'+eol
    +'DNS[]=8.8.4.4'+eol
  , expectD =
    {
      o: 'p',
      'a with spaces': 'b  c',
      " xa  n          p ": '"\r\nyoyoyo\r\r\n',
      '[disturbing]': 'hey you never know',
      's': 'something',
      's1': '\"something\'',
      's2': 'something else',
      'zr': ['deedee'],
      'ar': ['one', 'three', 'this is included'],
      'br': ['cold', 'warm'],
      'eq': 'eq=eq',
      a:
        {
          av: 'a val',
          e: '{ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }',
          j: '"{ o: "p", a: { av: "a val", b: { c: { e: "this [value]" } } } }"',
          "[]": "a square?",
          cr: ['four', 'eight'],
          b: { c: { e: '1', j: '2' } }
        },
      'x.y.z': {
        'x.y.z': 'xyz',
        'a.b.c': {
          'a.b.c': 'abc',
          'nocomment': 'this\; this is not a comment',
          noHashComment: 'this\# this is not a comment'
        }
      }
    }
  , expectF = '[prefix.log]'+eol
    + 'type=file'+eol+eol
    + '[prefix.log.level]'+eol
    + 'label=debug'+eol
    + 'value=10'+eol
  , expectG = '[log]' +eol
    + 'type = file'+eol+eol
    + '[log.level]'+eol
    + 'label = debug'+eol
    + 'value = 10'+eol

test("decode from file", function (t) {
  var d = i.decode(data)
  t.deepEqual(d, expectD)
  t.end()
})

test("encode from data. isArray=true", function (t) {
  var e = i.encode(i.decode(expectE), { isArray: true })
  t.deepEqual(e, expectE)

  var obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), eol, 'Never a blank first line')
  t.notEqual(e.slice(-2), eol+eol, 'Never a blank final line')

  t.end()
})

test("encode from data. isArray=false", function (t) {
  var e = i.encode(i.decode(expectI), { isArray: false })
  t.deepEqual(e, expectIisArray)

  var obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), eol, 'Never a blank first line')
  t.notEqual(e.slice(-2), eol+eol, 'Never a blank final line')

  t.end()
})

test("encode systemd network configuration. isArray=false", function (t) {
  var e = i.encode(i.decode(expectH), { isArray: false })
  t.deepEqual(e, expectH)

  var obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), eol, 'Never a blank first line')
  t.notEqual(e.slice(-2), eol+eol, 'Never a blank final line')

  t.end()
})

test("encode systemd network configuration. isArray=true", function (t) {
  var e = i.encode(i.decode(expectH), { isArray: true })
  t.deepEqual(e, expectHisArray)

  var obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  e = i.encode(obj)
  t.notEqual(e.slice(0, 1), eol, 'Never a blank first line')
  t.notEqual(e.slice(-2), eol+eol, 'Never a blank final line')

  t.end()
})

test("encode with option", function (t) {
  var obj = {log: { type:'file', level: {label:'debug', value:10} } }
  e = i.encode(obj, {section: 'prefix'})
  t.equal(e, expectF)
  t.end()
})

test("encode with whitespace", function (t) {
  var obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  e = i.encode(obj, { whitespace: true })
  t.equal(e, expectG)
  t.end()
})
