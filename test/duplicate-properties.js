const i = require('../')
const tap = require('tap')
const test = tap.test
const fs = require('fs')
const path = require('path')

const fixture = path.resolve(__dirname, './fixtures/duplicate.ini')
const data = fs.readFileSync(fixture, 'utf8')

tap.cleanSnapshot = s => s.replace(/\r\n/g, '\n')

test('decode with duplicate properties', function (t) {
  const d = i.decode(data)
  t.matchSnapshot(d)
  t.end()
})

test('encode with duplicate properties', function (t) {
  const e = i.encode({
    ar: ['1', '2', '3'],
    br: ['1', '2'],
  })
  t.matchSnapshot(e)
  t.end()
})

test('decode duplicate properties with bracketedArray=false', function (t) {
  const d = i.decode(data, { bracketedArray: false })
  t.matchSnapshot(d)
  t.end()
})

test('encode duplicate properties with bracketedArray=false', function (t) {
  const e = i.encode({
    ar: ['1', '2', '3'],
    br: ['1', '2'],
  }, { bracketedArray: false })
  t.matchSnapshot(e)
  t.end()
})
