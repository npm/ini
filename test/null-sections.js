const ini = require('../')
const t = require('tap')

// 2026-10-11: Section paths replace null ancestors just like other scalar values.
t.test('nested sections replace scalar parents', t => {
  for (const value of ['null', 'false', 'text']) {
    t.test(`replace a ${value} parent`, t => {
      t.same(ini.parse(`a=${value}\n[a.b]\nx=1`), {
        a: { b: { x: '1' } },
      })
      t.end()
    })
  }
  t.same(ini.parse('[a]\nb=null\n[a.b.c]\nx=1'), {
    a: { b: { c: { x: '1' } } },
  }, 'replace a null parent inside a section')
  t.same(ini.parse('a.b=null\n[a.b.c]\nx=1'), {
    a: { b: { c: { x: '1' } } },
  }, 'replace a null parent introduced by a dotted key')
  t.same(ini.parse('a=null'), { a: null }, 'retain null without a nested section')
  t.end()
})
