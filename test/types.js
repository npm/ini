const i = require('../')
const tap = require('tap')
const test = tap.test

test('a string that spells a boolean or null survives a round trip', function (t) {
  const data = {
    flag: 'true',
    other: 'false',
    nothing: 'null',
    section: { flag: 'true' },
  }
  const encoded = i.encode(data)
  t.equal(
    JSON.stringify(i.decode(encoded)),
    JSON.stringify(data),
    'decoded values are still strings'
  )
  t.end()
})

test('a quoted true, false or null is not turned into a value of another type', function (t) {
  t.equal(
    JSON.stringify(i.decode('a = "true"\nb = \'false\'\nc = "null"\n')),
    JSON.stringify({ a: 'true', b: 'false', c: 'null' })
  )
  t.end()
})

test('unquoted true, false and null are still decoded to their types', function (t) {
  t.equal(
    JSON.stringify(i.decode('a=true\nb=false\nc=null\n')),
    JSON.stringify({ a: true, b: false, c: null })
  )
  t.end()
})
