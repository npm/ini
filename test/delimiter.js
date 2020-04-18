var i = require('../')
var tap = require('tap')
var test = tap.test

test('decode with default delimiter', function (t) {
  var decoded = i.decode([
    '[a.b]',
    'foo = 1',
    '[c\\.d]',
    'foo = 2',
    '[a_b]',
    'foo = 3'
  ].join('\n'))
  t.deepEqual(decoded, {
    a: {
      b: {
        foo: '1'
      }
    },
    'c.d': {
      foo: '2'
    },
    'a_b': {
      foo: '3'
    }
  })
  t.end()
})

test('decode with custom delimiter', function (t) {
  var decoded = i.decode([
    '[a_b]',
    'foo = 1',
    '[c\\_d]',
    'foo = 2',
    '[a.b]',
    'foo = 3'
  ].join('\n'), { delimiter: '_' })
  t.deepEqual(decoded, {
    a: {
      b: {
        foo: '1'
      }
    },
    'c.d': {
      foo: '2'
    },
    'a.b': {
      foo: '3'
    }
  })
  t.end()
})

test('decode with no delimiter', function (t) {
  var decoded = i.decode([
    '[a.b]',
    'foo = 1',
    '[c\\.d]',
    'foo = 2'
  ].join('\n'), { delimiter: false })
  t.deepEqual(decoded, {
    'a.b': {
      foo: '1'
    },
    'c.d': {
      foo: '2'
    }
  })
  t.end()
})

test('encode with default delimiter', function (t) {
  var obj = {
    a: {
      b: {
        foo: 'bar'
      }
    },
    'a.b': {
      foo: 'bar'
    }
  }
  var encoded = i.encode(obj)
  t.equal(encoded, [
    '[a.b]',
    'foo=bar',
    '',
    '[a\\.b]',
    'foo=bar',
    ''
  ].join('\n'))
  t.end()
})

test('encode with custom delimiter', function (t) {
  var obj = {
    a: {
      b: {
        foo: 'bar'
      }
    },
    'a_b': {
      foo: 'bar'
    }
  }
  var encoded = i.encode(obj, { delimiter: '_' })
  t.equal(encoded, [
    '[a_b]',
    'foo=bar',
    '',
    '[a\\_b]',
    'foo=bar',
    ''
  ].join('\n'))
  t.end()
})

test('encode with no delimiter set should default to dot', function (t) {
  var obj = {
    a: {
      b: {
        foo: 'bar'
      }
    }
  }
  var encoded = i.encode(obj, { delimiter: false })
  t.equal(encoded, [
    '[a.b]',
    'foo=bar',
    ''
  ].join('\n'))
  t.end()
})
