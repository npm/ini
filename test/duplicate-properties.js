/*
 * @Author: John Trump
 * @Date: 2020-11-28 15:26:01
 * @LastEditors: Leask Wong
 * @LastEditTime: 2021-11-09 15:52:26
 */

const ini = require('../')
const tap = require('tap')
const test = tap.test

const eol = typeof process !== 'undefined' &&
  process.platform === 'win32' ? '\r\n' : '\n'

test('decode with duplicate properties', function (t) {
  var d = ini.decode(`
  zr[] = deedee;
  zr=123;
  ar[] = one
  ar[] = three;
  str = 3;
  brr = 1;
  brr = 2;
  brr = 3;
  brr = 3;`)
  t.same(d, {
    zr: ['deedee', '123'],
    ar: ['one', 'three'],
    str: '3',
    brr: '3',
  })
  t.end()
})

test('encode with duplicate properties', function (t) {
  const d = ini.encode({
    ar: ['1', '2', '3'],
    br: ['1', '2'],
  })
  const excepted = [
    'ar[]=1',
    'ar[]=2',
    'ar[]=3',
    'br[]=1',
    'br[]=2',
    '',
  ].join(eol)
  t.same(d, excepted)
  t.end()
})

test("decode duplicate properties with 'withoutArraySuffix'", function (t) {
  var d = ini.decode([
    'zr[] = deedee;',
    'zr=123;',
    'ar[] = one',
    'ar[] = three;',
    'str = 3;',
    'brr = 1;',
    'brr = 2;',
    'brr = 3;',
    'brr = 3;',
  ].join(eol), { withoutArraySuffix: true })
  t.same(d, {
    zr: ['deedee', '123'],
    ar: ['one', 'three'],
    str: '3',
    brr: ['1', '2', '3', '3'],
  })
  t.end()
})

test("encode duplicate properties with 'withoutArraySuffix'", function (t) {
  var d = ini.encode({
    ar: ['1', '2', '3'],
    br: ['1', '2'],
  }, { withoutArraySuffix: true })
  var excepted = 'ar=1\n'
    + 'ar=2\n'
    + 'ar=3\n'
    + 'br=1\n'
    + 'br=2\n'
  t.same(d, excepted)
  t.end()
})
