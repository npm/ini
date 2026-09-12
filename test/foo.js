const i = require('../')
const tap = require('tap')
const test = tap.test
const fs = require('fs')
const path = require('path')
const fixture = path.resolve(__dirname, './fixtures/foo.ini')
const data = fs.readFileSync(fixture, 'utf8')
const errorFixture = path.resolve(__dirname, './fixtures/foo-multiline-error.ini')
const errorData = fs.readFileSync(errorFixture, 'utf8')

tap.cleanSnapshot = s => s.replace(/\r\n/g, '\n')

test('decode from file', function (t) {
  const d = i.decode(data)
  t.matchSnapshot(d)
  t.end()
})

test('decode from file with multiline disabled', function (t) {
  const d = i.decode(data, { multiline: false })
  t.matchSnapshot(d)
  t.end()
})

test('encode from data', function (t) {
  const d = i.decode(data)
  const e = i.encode(d)
  t.matchSnapshot(e)
  t.end()
})

test('never a blank first or last line', function (t) {
  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj)
  t.not(e.slice(0, 1), '\n', 'Never a blank first line')
  t.not(e.slice(-2), '\n\n', 'Never a blank final line')
  t.end()
})

test('encode with option', function (t) {
  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj, { section: 'prefix' })

  t.matchSnapshot(e)
  t.end()
})

test('encode with whitespace', function (t) {
  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj, { whitespace: true })

  t.matchSnapshot(e)
  t.end()
})

test('encode with newline', function (t) {
  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj, { newline: true })

  t.matchSnapshot(e)
  t.end()
})

test('encode with platform=win32', function (t) {
  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj, { platform: 'win32' })

  t.matchSnapshot(e.split('\r\n'))
  t.end()
})

test('encode with align', function (t) {
  const d = i.decode(data)
  const e = i.encode(d, { align: true })

  t.matchSnapshot(e)
  t.end()
})

test('encode with sort', function (t) {
  const d = i.decode(data)
  const e = i.encode(d, { sort: true })

  t.matchSnapshot(e)
  t.end()
})

test('encode with align and sort', function (t) {
  const d = i.decode(data)
  const e = i.encode(d, { align: true, sort: true })

  t.matchSnapshot(e)
  t.end()
})

test('encode within browser context', function (t) {
  Object.defineProperty(process, 'platform', { value: undefined })

  const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
  const e = i.encode(obj)

  t.matchSnapshot(e)
  t.end()
})

test('legacy encode preserves problematic multiline entry', function (t) {
  const obj = i.decode(errorData)
  const encoded = i.encode(obj, { strictMultiline: false })
  // make sure the lone \r is treated as newline on Windows
  t.matchSnapshot(encoded.split(/\r?\n/))
  t.end()
})

test('strict encode fails on problematic multiline entry', function (t) {
  const obj = i.decode(errorData)
  t.throws(() => i.encode(obj, { strictMultiline: true }))
  t.end()
})

// Every value here is one the verbatim continuation form cannot carry, so
// encode() falls back to JSON quoting: parse(stringify(x)) must still be x,
// and strictMultiline must reject the value instead.
const quoted = {
  'unindented line': ['line1\nline2', '"line1\\nline2"'],
  'carriage return': ['a\r\n b', '"a\\r\\n b"'],
  'blank line inside the value': ['x\n\n y', '"x\\n\\n y"'],
  'whitespace-only line': ['x\n \n y', '"x\\n \\n y"'],
  'trailing newline': ['x\n y\n', '"x\\n y\\n"'],
  'equals sign in a continuation line': ['x\n y=z', '"x\\n y=z"'],
  'comment-looking continuation line': ['x\n ;y', '"x\\n ;y"'],
}

for (const [name, [value, expected]] of Object.entries(quoted)) {
  test(`quoted fallback: ${name}`, function (t) {
    const obj = { k: value, list: [value] }
    const e = i.encode(obj)
    t.same(e.split(/\r?\n/), [`k=${expected}`, `list[]=${expected}`, ''])
    t.same(i.decode(e), obj, 'round trip')
    t.throws(() => i.encode(obj, { strictMultiline: true }), /continuation lines/)
    t.end()
  })
}

// Values the verbatim form can carry, including a first line that needs
// escaping and array entries.
test('continuation lines round trip', function (t) {
  const obj = {
    semi: 'x;y\n z',
    quoted: '"q"\n y',
    empty: '\n x',
    list: ['a\n b', 'c\n\td'],
  }
  const e = i.encode(obj)
  t.same(e.split(/\r?\n/), [
    'semi=x\\;y', ' z',
    'quoted="\\"q\\""', ' y',
    'empty=', ' x',
    'list[]=a', ' b',
    'list[]=c', '\td',
    '',
  ])
  t.same(i.decode(e), obj, 'round trip')
  t.end()
})

test('decode: what ends a continuation', function (t) {
  t.same(i.decode('a=x\n y\n\n z'), { a: 'x\n y', z: true }, 'blank line')
  t.same(i.decode('a=x\n y\n[s]\n z'), { a: 'x\n y', s: { z: true } }, 'section header')
  t.same(i.decode('a=x\n y\n=junk\n z'), { a: 'x\n y', z: true }, 'unparseable line')
  t.same(i.decode('a=x\n ; c\n y'), { a: 'x\n y' }, 'a comment does not')
  t.end()
})

test('decode: array entries continue', function (t) {
  t.same(i.decode('a[]=x\n y\na[]=z\n w'), { a: ['x\n y', 'z\n w'] })
  t.same(i.decode('a=x\n y\na=z\n w', { bracketedArray: false }), { a: ['x\n y', 'z\n w'] })
  t.end()
})
