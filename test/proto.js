/* eslint no-proto: "off" */
var ini = require('../')
var t = require('tap')

var data = `
__proto__ = quux
constructor.prototype.foo = asdfasdf
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
[ctor.constructor.prototype]
foo = asdfasdf
`

var res = ini.parse(data)

t.deepEqual(res, Object.assign(Object.create(null), {
  'constructor.prototype.foo': 'asdfasdf',
  foo: 'baz',
  other: Object.assign(Object.create(null), {
    foo: 'asdf',
  }),
  kid: Object.assign(Object.create(null), {
    foo: Object.assign(Object.create(null), {
      foo: 'kid',
    }),
  }),
  arrproto: Object.assign(Object.create(null), {
    hello: 'snyk',
    thanks: true,
  }),
  ctor: Object.assign(Object.create(null), {
    constructor: Object.assign(Object.create(null), {
      prototype: Object.assign(Object.create(null), {
        foo: 'asdfasdf',
      }),
    }),
  }),
}))
t.equal(res.__proto__, undefined)
t.equal(res.kid.__proto__, undefined)
t.equal(res.kid.foo.__proto__, undefined)
t.equal(res.arrproto.__proto__, undefined)
t.equal(Object.prototype.foo, undefined)
t.equal(Object.prototype[0], undefined)
t.equal(Object.prototype['0'], undefined)
t.equal(Object.prototype[1], undefined)
t.equal(Object.prototype['1'], undefined)
t.equal(Array.prototype[0], undefined)
t.equal(Array.prototype[1], undefined)
