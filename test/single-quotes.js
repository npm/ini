const ini = require('../')
const t = require('tap')

const issue242 = `ActiveIndex = '0'
MaximizedFlag = '1911'
ProductVersion = '14.0.25793.400'
Version = '1'
WindowCount = '1'`

t.test('decode then encode preserves single-quoted values (#242)', t => {
  const parsed = ini.parse(issue242)

  // Parse still unquotes for JS consumers (PR #16)
  t.equal(parsed.ActiveIndex, 0)
  t.equal(parsed.MaximizedFlag, 1911)
  t.equal(parsed.ProductVersion, '14.0.25793.400')
  t.equal(parsed.Version, 1)
  t.equal(parsed.WindowCount, 1)

  const encoded = ini.stringify(parsed)
  t.equal(encoded, [
    "ActiveIndex='0'",
    "MaximizedFlag='1911'",
    "ProductVersion='14.0.25793.400'",
    "Version='1'",
    "WindowCount='1'",
    '',
  ].join('\n'))
  t.end()
})

t.test('unquoted safe values stay unquoted', t => {
  t.equal(ini.stringify(ini.parse('ActiveIndex = 0')), 'ActiveIndex=0\n')
  t.equal(ini.stringify(ini.parse('name = something')), 'name=something\n')
  t.equal(ini.stringify({ ActiveIndex: 0 }), 'ActiveIndex=0\n')
  t.equal(ini.stringify({ ActiveIndex: '0' }), 'ActiveIndex=0\n')
  t.end()
})

t.test('double-quoted safe values are still unquoted on encode', t => {
  t.equal(ini.stringify(ini.parse('name = "something"')), 'name=something\n')
  t.equal(ini.stringify(ini.parse('s2 = "something else"')), 's2=something else\n')
  t.end()
})

t.test('double quotes still used for special characters', t => {
  t.equal(ini.stringify({ eq: 'eq=eq' }), 'eq="eq=eq"\n')
  t.equal(ini.stringify(ini.parse('eq = "eq=eq"')), 'eq="eq=eq"\n')
  t.end()
})

t.test('whitespace option keeps restored single quotes', t => {
  const encoded = ini.stringify(ini.parse("ActiveIndex = '0'"), { whitespace: true })
  t.equal(encoded, "ActiveIndex = '0'\n")
  t.end()
})

t.test('mixed quoted and unquoted keys in one object', t => {
  const parsed = ini.parse("quoted = '1'\nplain = 2\n")
  t.equal(ini.stringify(parsed), "quoted='1'\nplain=2\n")
  t.end()
})

t.test('single-quoted value containing a quote falls back to safe()', t => {
  const parsed = ini.parse("odd = 'a'b'\n")
  t.equal(parsed.odd, "a'b")
  t.equal(ini.stringify(parsed), "odd=a'b\n")
  t.end()
})

t.test('single quotes are preserved inside sections', t => {
  const parsed = ini.parse("[window]\nActiveIndex = '0'\nTitle = unquoted\n")
  t.equal(parsed.window.ActiveIndex, 0)
  t.equal(parsed.window.Title, 'unquoted')
  t.equal(ini.stringify(parsed), "[window]\nActiveIndex='0'\nTitle=unquoted\n")
  t.end()
})

t.test('empty single-quoted value round-trips', t => {
  t.equal(ini.stringify(ini.parse("x = ''")), "x=''\n")
  t.end()
})
