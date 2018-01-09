var i = require("../")
  , tap = require("tap")
  , test = tap.test
  , fs = require("fs")
  , path = require("path")
  , fixture = path.resolve(__dirname, "./fixtures/comment.ini")
  , data = fs.readFileSync(fixture, "utf8")

test("decode from file, default comment delimiters", function (t) {
  var d = i.decode(data)
  t.deepEqual(d, {
    'awesome': {
      'test01': 'thisIsDelimited'
    }
  })
  t.end()
})

test("decode from file, without hashtag delimiter", function (t) {
  var d = i.decode(data, { 'commentDelimiters': [';'] })
  t.deepEqual(d, {
    'awesome': {
      'test01': 'thisIsDelimited#Proceed'
    }
  })
  t.end()
})

test("encode from data, without hashtag delimiter", function (t) {
  const testData = {
    'awesome': {
      'test': 'this is ; a test # string'
    }
  }

  const encoded = i.encode(testData, { 'commentDelimiters': [';'] })
  t.equal(encoded, "[awesome]\n" +
    "test=this is \\; a test # string\n")
  t.end()
})

test("save without passed opts", function (t) {
  t.equal(i.safe('This ; is an # awesome string'), 'This \\; is an \\# awesome string')
  t.end()
})
