var t = require('tap'),
  eol = require('os').EOL
Object.defineProperty(process, 'platform', { value: 'win32' })
const ini = require('../ini.js')

const res = ini.encode({ foo: { bar: 'baz' } })
t.equal(res, "[foo]"+eol+"bar=baz"+eol)

t.equal(ini.encode({ bar: 'baz' }, 'foo'), '[foo]'+eol+'bar=baz'+eol)

t.same(ini.decode('=just junk!'+eol+'[foo]'+eol+'bar'+eol),
  { foo: { bar: true } })

t.same(ini.decode('[x]'+eol+'y=1'+eol+'y[]=2'+eol), {
  x: {
    y: [1, 2]
  }
})

t.equal(ini.unsafe(''), '')
t.equal(ini.unsafe('x;y'), 'x')
t.equal(ini.unsafe('x  # y'), 'x')
t.equal(ini.unsafe('x "\\'), 'x "\\')
