const ini = require('../')
const t = require('tap')

t.test('unescapes dots in an implicit parent section', t => {
  t.same(ini.parse('[x\\.y\\.z.a\\.b\\.c]\nfoo=bar'), {
    'x.y.z': { 'a.b.c': { foo: 'bar' } },
  })
  t.end()
})

t.test('unescapes dots at every level of a section path', t => {
  t.same(ini.parse('[a\\.b.c.d\\.e.f\\.g]\nfoo=bar'), {
    'a.b': { c: { 'd.e': { 'f.g': { foo: 'bar' } } } },
  })
  t.end()
})

t.test('preserves an explicit escaped parent in either order', t => {
  const parent = '[x\\.y]\nparent=true\n'
  const child = '[x\\.y.a\\.b]\nchild=true\n'
  const expected = { 'x.y': { parent: true, 'a.b': { child: true } } }
  t.same(ini.parse(parent + child), expected, 'parent first')
  t.same(ini.parse(child + parent), expected, 'child first')
  t.end()
})

t.test('combines siblings under an implicit escaped parent', t => {
  t.same(ini.parse('[a\\.b.c]\nvalue=one\n[a\\.b.d]\nvalue=two'), {
    'a.b': { c: { value: 'one' }, d: { value: 'two' } },
  })
  t.end()
})

t.test('preserves values in a nested escaped parent', t => {
  const parent = '[a.b\\.c]\nparent=true\n'
  const child = '[a.b\\.c.d]\nchild=true\n'
  const expected = { a: { 'b.c': { parent: true, d: { child: true } } } }
  t.same(ini.parse(parent + child), expected)
  t.end()
})

t.test('round-trips nested objects with dotted section names', t => {
  const data = { 'x.y.z': { 'a.b.c': { foo: 'bar' } } }
  t.same(ini.parse(ini.stringify(data)), data)
  t.end()
})

t.test('keeps literal dots distinct from section separators', t => {
  const literal = '[a\\.b.child]\nvalue=one\n'
  const nested = '[a.b]\nvalue=two\n'
  const expected = {
    'a.b': { child: { value: 'one' } },
    a: { b: { value: 'two' } },
  }
  t.same(ini.parse(literal + nested), expected, 'literal first')
  t.same(ini.parse(nested + literal), expected, 'nested first')
  t.end()
})
