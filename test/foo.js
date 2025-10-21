const i = require('../')
const fs = require('node:fs')
const t = require('node:test')
const a = require('node:assert')
const path = require('node:path')
const fixture = path.resolve(__dirname, './fixtures/foo.ini')
const data = fs.readFileSync(fixture, 'utf8')

t.snapshot.setDefaultSnapshotSerializers([
  JSON.stringify,
  s => s.replace(/\r\n/g, '\n'),
])

t.suite('foo.ini', () => {
  t.test('decode from file', (t) => {
    const d = i.decode(data)
    t.assert.snapshot(d)
  })

  t.test('encode from data', (t) => {
    const d = i.decode(data)
    const e = i.encode(d)
    t.assert.snapshot(e)
  })

  t.test('never a blank first or last line', () => {
    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj)
    a.notEqual(e.slice(0, 1), '\n', 'Never a blank first line')
    a.notEqual(e.slice(-2), '\n\n', 'Never a blank final line')
  })

  t.test('encode with option', (t) => {
    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj, { section: 'prefix' })
    t.assert.snapshot(e)
  })

  t.test('encode with whitespace', (t) => {
    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj, { whitespace: true })

    t.assert.snapshot(e)
  })

  t.test('encode with newline', (t) => {
    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj, { newline: true })

    t.assert.snapshot(e)
  })

  t.test('encode with platform=win32', (t) => {
    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj, { platform: 'win32' })
    t.assert.snapshot(e.split('\r\n'))
  })

  t.test('encode with align', (t) => {
    const d = i.decode(data)
    const e = i.encode(d, { align: true })
    t.assert.snapshot(e)
  })

  t.test('encode with sort', (t) => {
    const d = i.decode(data)
    const e = i.encode(d, { sort: true })
    t.assert.snapshot(e)
  })

  t.test('encode with align and sort', (t) => {
    const d = i.decode(data)
    const e = i.encode(d, { align: true, sort: true })
    t.assert.snapshot(e)
  })

  t.test('encode within browser context', (t) => {
    Object.defineProperty(process, 'platform', { value: undefined })

    const obj = { log: { type: 'file', level: { label: 'debug', value: 10 } } }
    const e = i.encode(obj)

    t.assert.snapshot(e)
  })
})
