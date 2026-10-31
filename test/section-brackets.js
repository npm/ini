const t = require('tap')
const ini = require('../')

for (const section of ['plain', 'profile]archive', '[profile]', 'nested.profile]archive']) {
  t.test(`roundtrip section ${JSON.stringify(section)}`, t => {
    const input = { [section]: { name: 'sample' } }
    const text = ini.stringify(input)
    t.same(ini.parse(text), input)
    t.end()
  })
}

t.test('a trailing assignment is not a section header', t => {
  t.same(ini.parse('[profile]=sample'), { '[profile]': 'sample' })
  t.end()
})
