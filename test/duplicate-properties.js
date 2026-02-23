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

// Regression test for #298 - same key name across different sections
// should NOT be treated as duplicates
test('bracketedArray=false should scope duplicates per section', function (t) {
  const content = `
[section_1]
var = 1

[section_2]
var = 2
`
  const d = i.decode(content, { bracketedArray: false })
  // Both values should be scalars, not arrays, since each key appears
  // only once within its own section
  t.equal(d.section_1.var, '1', 'section_1.var should be a scalar')
  t.equal(d.section_2.var, '2', 'section_2.var should be a scalar')
  t.notOk(Array.isArray(d.section_1.var), 'section_1.var should not be an array')
  t.notOk(Array.isArray(d.section_2.var), 'section_2.var should not be an array')
  t.end()
})

test('bracketedArray=false still creates arrays for duplicates within same section', function (t) {
  const content = `
[section_1]
var = 1
var = 2
var = 3

[section_2]
var = single
`
  const d = i.decode(content, { bracketedArray: false })
  // section_1.var should be an array since it has duplicates within the section
  t.ok(Array.isArray(d.section_1.var), 'section_1.var should be an array')
  t.same(d.section_1.var, ['1', '2', '3'], 'section_1.var should have all values')
  // section_2.var should be a scalar since it only appears once
  t.equal(d.section_2.var, 'single', 'section_2.var should be a scalar')
  t.notOk(Array.isArray(d.section_2.var), 'section_2.var should not be an array')
  t.end()
})
