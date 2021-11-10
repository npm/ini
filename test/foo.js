const i = require('../')
const tap = require('tap')
const test = tap.test
const fs = require('fs')
const path = require('path')
const fixture = path.resolve(__dirname, './fixtures/foo.ini')
const data = fs.readFileSync(fixture, 'utf8')

tap.cleanSnapshot = s => s.replace(/\r\n/g, '\n')

test('decode from file', function (t) {
  const d = i.decode(data)
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
