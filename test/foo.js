var i = require("../")
  , tap = require("tap")
  , test = tap.test
  , util = require('util')
  , fs = require("fs")
  , path = require("path")
  , fixture = path.resolve(__dirname, "./fixtures/foo.ini")
  , data = fs.readFileSync(fixture, "utf8")
  , d
  , expectE = 'o = p\n'
            + 'a with spaces = b  c\n'
            + '" xa  n          p " = "\\"\\r\\nyoyoyo\\r\\r\\n"\n'
            + '"[disturbing]" = hey you never know\n'
            + '[a]\n'
            + 'av = a val\n'
            + 'e = { o: p, a: '
            + '{ av: a val, b: { c: { e: "this [value]" '
            + '} } } }\nj = "\\"{ o: \\"p\\", a: { av:'
            + ' \\"a val\\", b: { c: { e: \\"this [value]'
            + '\\" } } } }\\""\n"[]" = a square?\n[a.b.c]\ne = 1\nj = 2\n'
  , expectD =
    { o: 'p',
      'a with spaces': 'b  c',
      " xa  n          p ":'"\r\nyoyoyo\r\r\n',
      '[disturbing]': 'hey you never know',
      a:
       { av: 'a val',
         e: '{ o: p, a: { av: a val, b: { c: { e: "this [value]" } } } }',
         j: '"{ o: "p", a: { av: "a val", b: { c: { e: "this [value]" } } } }"',
         "[]": "a square?",
         b: { c: { e: '1', j: '2' } } }
    }

test("decode from file", function (t) {
  d = i.decode(data)
  t.deepEqual(d, expectD)
  t.end()
})

test("encode from data", function (t) {
  e = i.encode(expectD)
  t.deepEqual(e, expectE)
  t.end()
})

test("good and bad separator values", function(t) {
  var bad_separators = [1, '0', ['\n'], {"":'\n'}, true, '-']
  bad_separators.forEach(function(separator) {
    t.throws(function() { i.encode(expectD, null, separator) },
             'Exception for bad separator: ' + util.inspect(separator))
  })

  var good_separators = [undefined, null, false, "", '    ', '\n', '\r\n']
  good_separators.forEach(function(separator) {
    t.doesNotThrow(function() { i.encode(expectD, null, separator) },
                   'No problem with separator: ' + util.inspect(separator))
  })

  t.end()
})

test("encode with newlines", function(t) {
  e = i.encode(expectD, null, "\n")
  t.deepEqual(e, spacedE('\n'))

  e = i.encode(expectD, null, "\r\n")
  t.deepEqual(e, spacedE('\r\n'))

  t.end()

  function spacedE(chr) {
    function fix(line) { return line.replace(/^\[/, chr+'[') }
    return expectE.split(/\n/)
                  .map(fix)
                  .join('\n')
  }
})

test("no spurious separators", function(t) {
  var obj = {log: { type:'file', level: {label:'debug', value:10} } }

  e = i.encode(obj, null, '\r\n')
  t.notEqual(e.slice(0, 2), '\r\n', 'Never a separator on the first line')
  t.notEqual(e.slice(-2), '\r\n', 'Never a separator on the last line')
  t.end()
})
