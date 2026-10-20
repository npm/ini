const ini = require('../')
const t = require('tap')

t.test('encoding does not mutate options', t => {
  const options = { platform: 'linux', align: true }
  const before = { ...options }
  ini.stringify({ a: 1, longer: 2 }, options)
  t.same(options, before)
  t.end()
})

t.test('frozen options receive encoding defaults', t => {
  const options = Object.freeze({ platform: 'linux', align: true })
  t.equal(ini.stringify({ a: 1, longer: 2, values: ['x'] }, options),
    ini.stringify({ a: 1, longer: 2, values: ['x'] }, { ...options }))
  t.end()
})

t.test('decoding does not mutate options', t => {
  const options = {}
  ini.parse('values[]=a\nvalues[]=b', options)
  t.same(options, {})
  t.end()
})

t.test('frozen options receive decoding defaults', t => {
  const options = Object.freeze({})
  t.same(ini.parse('values[]=a\nvalues[]=b', options), { values: ['a', 'b'] })
  t.same(ini.parse('values=a\nvalues=b', Object.freeze({ bracketedArray: false })),
    { values: ['a', 'b'] })
  t.end()
})
