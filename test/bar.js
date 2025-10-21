const ini = require('../')
const t = require('node:test')
const a = require('node:assert')

const data = {
  number: { count: 10 },
  string: { drink: 'white russian' },
  boolean: { isTrue: true },
  'nested boolean': { theDude: { abides: true, rugCount: 1 } },
}

t.suite('parse(stringify(x)) is same as x', () => {
  for (const k in data) {
    const s = ini.stringify(data[k])
    t.test(k, () => {
      a.deepEqual(ini.parse(s), data[k])
    })
  }
})
