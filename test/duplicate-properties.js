/*
 * @Author: John Trump
 * @Date: 2020-11-28 15:26:01
 * @LastEditors: John Trump
 * @LastEditTime: 2020-11-28 15:52:26
 */
var ini = require("../ini");
var tap = require("tap");
var test = tap.test;

test("decode with duplicate properties", function(t) {
  var d = ini.decode(`
  zr[] = deedee;
  zr=123;
  ar[] = one
  ar[] = three;
  str = 3;
  brr = 1;
  brr = 2;
  brr = 3;
  brr = 3;`);
  t.deepEqual(d, {
    zr: ["deedee", "123"],
    ar: ["one", "three"],
    str: "3",
    brr: ["1", "2", "3", "3"],
  });
  t.end();
});

test("encode with duplicate properties", function(t) {
  var d = ini.encode({
    ar: ["1", "2", "3"],
    br: ["1", "2"],
  });
  var excepted = 'ar[]=1\n'
               + 'ar[]=2\n'
               + 'ar[]=3\n'
               + 'br[]=1\n'
               + 'br[]=2\n'
  t.deepEqual(d, excepted)
  t.end();
});

test("encode with option with duplicate properties", function(t) {
  var d = ini.encode({
    ar: ["1", "2", "3"],
    br: ["1", "2"],
  }, {
    withoutArraySuffix: true
  });
  var excepted = 'ar=1\n'
               + 'ar=2\n'
               + 'ar=3\n'
               + 'br=1\n'
               + 'br=2\n'
  t.deepEqual(d, excepted)
  t.end();
});