var ini = require('../')
var t = require('tap')

var data = `
__proto__ = quux
foo = baz
[__proto__]
foo = bar
[other]
foo = asdf
[kid.__proto__.foo]
foo = kid
[arrproto]
hello = snyk
__proto__[] = you did a good job
__proto__[] = so you deserve arrays
thanks = true
`
var res = ini.parse(data)
t.deepEqual(res, {
  foo: 'baz',
  other: {
    foo: 'asdf',
  },
  kid: {
    foo: {
      foo: 'kid',
    },
  },
  arrproto: {
    hello: 'snyk',
    thanks: true,
  },
})
t.equal(res.__proto__, Object.prototype)
t.equal(res.kid.__proto__, Object.prototype)
t.equal(res.kid.foo.__proto__, Object.prototype)
t.equal(res.arrproto.__proto__, Object.prototype)
t.equal(Object.prototype.foo, undefined)
t.equal(Object.prototype[0], undefined)
t.equal(Object.prototype['0'], undefined)
t.equal(Object.prototype[1], undefined)
t.equal(Object.prototype['1'], undefined)
t.equal(Array.prototype[0], undefined)
t.equal(Array.prototype[1], undefined)
