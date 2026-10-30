// test that parse(stringify(obj)

var ini = require('../')
var test = require('tap').test

var data = {
  number: { count: 10 },
  string: { drink: 'white russian' },
  boolean: { isTrue: true },
  'nested boolean': { theDude: { abides: true, rugCount: 1 } },
  'key ending in []': { 'foo[]': 'bar' },
  'quoted key ending in []': { '[foo[]': 'bar' },
  'array with a quoted key': { '[foo': ['first', 'second'] },
}

test('parse(stringify(x)) is same as x', function (t) {
  for (var k in data) {
    var s = ini.stringify(data[k])
    t.comment(s, data[k])
    t.same(ini.parse(s), data[k])
  }

  t.end()
})

test('array marker is read without a trailing comment', function (t) {
  t.same(ini.parse('flag[] # note'), { flag: [true] })
  t.same(ini.parse('flag # note[]'), { flag: true })
  t.end()
})

test('align pads to a quoted key ending in []', function (t) {
  var lines = ini.stringify({ 'foo[]': 'bar', x: 'y' }, { align: true }).split('\n')
  t.equal(lines[0].indexOf('='), lines[1].indexOf('='))
  t.end()
})
