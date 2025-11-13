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
