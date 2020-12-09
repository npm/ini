var t = require('tap')
Object.defineProperty(process, 'platform', { value: 'win32' })
const ini = require('../ini.js')

const res = ini.encode({foo: { bar: 'baz' }})
t.equal(res, '[foo]\r\nbar=baz\r\n')

t.equal(ini.encode({bar: 'baz'}, 'foo'), '[foo]\r\nbar=baz\r\n')

t.same(ini.decode('=just junk!\r\n[foo]\r\nbar\r\n'),
  { foo: { bar: true }})

t.same(ini.decode('[x]\r\ny=1\r\ny[]=2\r\n'), {
  x: {
    y: [1, 2],
  },
})

t.equal(ini.unsafe(''), '')
t.equal(ini.unsafe('x;y'), 'x')
t.equal(ini.unsafe('x  # y'), 'x')
t.equal(ini.unsafe('x "\\'), 'x "\\')
