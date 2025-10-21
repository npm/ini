const i = require('../')
const t = require('node:test')
const fs = require('node:fs')
const path = require('node:path')

const fixture = path.resolve(__dirname, './fixtures/duplicate.ini')
const data = fs.readFileSync(fixture, 'utf8')

t.snapshot.setDefaultSnapshotSerializers([
  JSON.stringify,
  s => s.replace(/\r\n/g, '\n'),
])

t.test('duplicate properties', (t) => {
  t.test('decode with duplicate properties', (t) => {
    const d = i.decode(data)
    t.assert.snapshot(d)
  })

  t.test('encode with duplicate properties', (t) => {
    const e = i.encode({
      ar: ['1', '2', '3'],
      br: ['1', '2'],
    })
    t.assert.snapshot(e)
  })

  t.test('decode duplicate properties with bracketedArray=false', (t) => {
    const d = i.decode(data, { bracketedArray: false })
    t.assert.snapshot(d)
  })

  t.test('encode duplicate properties with bracketedArray=false', (t) => {
    const e = i.encode({
      ar: ['1', '2', '3'],
      br: ['1', '2'],
    }, { bracketedArray: false })
    t.assert.snapshot(e)
  })
})
