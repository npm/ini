const ini = require('../')
const t = require('tap')

t.test('stringify skips undefined values', (t) => {
  t.equal(
    ini.stringify({ a: undefined, b: 1 }),
    'b=1\n'
  )
  t.equal(
    ini.stringify({ a: undefined, s: { b: undefined, c: 1 }, arr: [undefined, 'x'] }),
    'arr[]=x\n\n[s]\nc=1\n'
  )
  t.end()
})

t.test('stringify keeps null and other falsy values', (t) => {
  t.equal(ini.stringify({ a: null }), 'a=null\n')
  t.equal(ini.stringify({ a: false }), 'a=false\n')
  t.equal(ini.stringify({ a: 0 }), 'a=0\n')
  t.equal(ini.stringify({ a: '' }), 'a=\n')
  t.end()
})

t.test('parse(stringify) does not invent string "undefined"', (t) => {
  t.same(ini.parse(ini.stringify({ a: undefined })), {})
  t.same(
    ini.parse(ini.stringify({ a: undefined, s: { b: undefined, c: 1 } })),
    { s: { c: 1 } }
  )
  t.end()
})

t.test('align ignores undefined keys when padding', (t) => {
  const out = ini.stringify(
    { short: 1, muchLongerKey: undefined, mid: 2 },
    { align: true }
  )
  t.match(out, /^short = 1\nmid {3}= 2\n$/)
  t.end()
})
