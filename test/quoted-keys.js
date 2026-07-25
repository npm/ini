const i = require('../')
const test = require('tap').test

test('decode a quoted key containing =', function (t) {
  t.same(i.decode('"a=b"=c\n'), { 'a=b': 'c' })
  t.same(i.decode('"key=with=eq"=v\n'), { 'key=with=eq': 'v' })
  t.same(i.decode('"=lead"=v\n'), { '=lead': 'v' })
  t.same(i.decode('"tr="=v\n'), { 'tr=': 'v' })
  t.end()
})

test('encode then decode round-trips keys containing =', function (t) {
  for (const obj of [
    { 'a=b': 'c' },
    { 'key=with=eq': 'v' },
    { '=lead': 'v' },
    { 'tr=': 'v' },
    { a: { 'b=c': 'd' } },
  ]) {
    t.same(i.decode(i.encode(obj)), obj)
  }
  t.end()
})

test('an unquoted key still splits on the first =', function (t) {
  t.same(i.decode('a=b=c\n'), { a: 'b=c' })
  t.same(i.decode('a="x=y"\n'), { a: 'x=y' })
  t.end()
})

test('a key with an unterminated quote is not treated as quoted', function (t) {
  t.same(i.decode('"a=b\n'), { '"a': 'b' })
  t.end()
})
