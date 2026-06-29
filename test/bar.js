// test that parse(stringify(obj)

var ini = require('../')
var test = require('tap').test

var data = {
  number: { count: 10 },
  string: { drink: 'white russian' },
  boolean: { isTrue: true },
  'nested boolean': { theDude: { abides: true, rugCount: 1 } },
}

test('parse(stringify(x)) is same as x', function (t) {
  for (var k in data) {
    var s = ini.stringify(data[k])
    t.comment(s, data[k])
    t.same(ini.parse(s), data[k])
  }

  t.end()
})

// `unsafe` unescapes `\\`, `\;` and `\#`, so `safe` has to escape the
// backslash for those values to survive a round trip.
test('parse(stringify(x)) round-trips values containing backslashes', function (t) {
  var values = {
    'two backslashes': '\\\\', // \ \
    'windows path': 'C:\\\\tmp\\\\x', // C : \ \ t m p \ \ x
    'backslash before semicolon': 'a\\;b', // a \ ; b
    'backslash before hash': 'a\\#b', // a \ # b
  }
  for (var label in values) {
    var obj = { k: values[label] }
    t.same(ini.parse(ini.stringify(obj)), obj, label)
  }

  // a backslash in a key name has to round-trip as well
  var keyed = {}
  keyed['a\\\\b'] = 'v' // a \ \ b
  t.same(ini.parse(ini.stringify(keyed)), keyed, 'backslash in key')

  t.end()
})
