var i = require("../")
  , os = require("os")
  , tap = require("tap")
  , test = tap.test
  , data = [
    '[group]'
    , 'foo = val'
    , 'bar ='
    , 'bad'
    , 'baz = val'
  ].join(os.EOL)

test("strict-false", function (t) {
  t.deepEqual(i.decode(data), {
    'group': {
      'foo': 'val',
      'bar': '',
      'bad': true,
      'baz': 'val',
    }
  })
  t.end()
})

test("strict-true", function (t) {
  t.throws(function() {
    i.decode(data, {strict:true})
  })
  t.end()
})
