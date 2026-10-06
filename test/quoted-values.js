const ini = require('../')
const tap = require('tap')

tap.test('quoted values with inline comments', t => {
  t.same(ini.parse('a.b = "c" ; asdf'), { 'a.b': 'c' })
  t.same(ini.parse("value = 'quoted' # comment"), { value: 'quoted' })
  t.same(ini.parse('value = "semi;colon" ; comment'), { value: 'semi;colon' })
  t.same(ini.parse('value = plain ; comment'), { value: 'plain' })
  t.end()
})
