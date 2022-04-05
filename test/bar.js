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
