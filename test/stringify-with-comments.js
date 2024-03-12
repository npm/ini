const i = require('../')
const tap = require('tap')
const test = tap.test
const fs = require('fs')
const path = require('path')
const fixture = path.resolve(__dirname, './fixtures/foo.ini')
const data = fs.readFileSync(fixture, 'utf8')

tap.cleanSnapshot = s => s.replace(/\r\n/g, '\n')

test('stringify with comments', function (t) {
  const d = i.parse(data)
  const s = i.stringify(d, { comments: true })
  t.matchSnapshot(s)
  t.end()
})
