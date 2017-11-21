var api = require("../")
  , tap = require("tap")
  , test = tap.test
  , fs = require("fs")
  , path = require("path")
  , fixture = path.resolve(__dirname, "./fixtures/literalDot.ini")
  , data = fs.readFileSync(fixture, "utf8")
  , expected = {
    "http://example.com": {
       foo: true
    },
    "**/*.js": {
       bar: true
    }
  }

test("decode from file (literalDot: true)", function (t) {
  var actual = api.decode(data, { literalDot: true })
  t.deepEqual(actual, expected)
  t.end()
})
