const ini = require('../')
const t = require('tap')

t.test('empty section names round trip', t => {
  for (const text of [
    '[]\na=1\n',
    'top=value\n[]\na=1\n',
    '[]\na[]=1\na[]=2\n[.child]\nb=3\n',
    '[parent.]\na=1\n[parent..child]\nb=2\n',
  ]) {
    const parsed = ini.parse(text)
    t.same(ini.parse(ini.stringify(parsed)), parsed, text)
  }
  t.end()
})

t.test('explicit empty section option writes its header', t => {
  const eol = require('os').EOL
  t.equal(ini.stringify({ a: '1' }, { section: '', platform: 'linux' }), '[]\na=1\n')
  t.equal(ini.stringify({ a: '1' }, ''), `[]${eol}a=1${eol}`)
  t.equal(ini.stringify({ a: '1' }, { platform: 'linux' }), 'a=1\n')
  t.equal(ini.stringify({}, { section: '' }), '')
  t.end()
})
