const t = require('node:test')
const a = require('node:assert')
Object.defineProperty(process, 'platform', { value: 'win32' })
const ini = require('..')

t.test('win32', () => {
  const res = ini.encode({ foo: { bar: 'baz' } })
  a.equal(res, '[foo]\r\nbar=baz\r\n')

  a.equal(ini.encode({ bar: 'baz' }, 'foo'), '[foo]\r\nbar=baz\r\n')

  a.deepEqual(ini.decode('=just junk!\r\n[foo]\r\nbar\r\n'),
    { foo: { bar: true } })

  a.deepEqual(ini.decode('[x]\r\ny=1\r\ny[]=2\r\n'), {
    x: {
      y: [1, 2],
    },
  })

  a.equal(ini.unsafe(''), '')
  a.equal(ini.unsafe('x;y'), 'x')
  a.equal(ini.unsafe('x  # y'), 'x')
  a.equal(ini.unsafe('x "\\'), 'x "\\')
})
