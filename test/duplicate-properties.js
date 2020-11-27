/*
 * @Author: John Trump
 * @Date: 2020-11-28 00:27:19
 * @LastEditors: John Trump
 * @LastEditTime: 2020-11-28 01:20:46
 */
var ini = require("../ini");
var result = ini.decode(`
zr[] = deedee
zr=123
ar[] = one
ar[] = three
str = 3;
brr = 1;
brr = 2;
brr = 3;
brr = 3;
`);

console.log('result: ', result);
/*
{
  zr: [ 'deedee', '123' ],
  ar: [ 'one', 'three' ],
  arr: '3',
  brr: [ '1', '2', '3', '3' ]
}
 */

var obj = {
  zr: ["deedee", "123"],
  ar: ["one", "three"],
  str: "3",
  brr: ["1", "2", "3", "3"],
};

var str = ini.encode(obj);
console.log('str: ', str);
/*
zr[]=deedee
zr[]=123
ar[]=one
ar[]=three
arr=3
brr[]=1
brr[]=2
brr[]=3
brr[]=3
 */

var strWithoutSuffix = ini.encode(obj, {withoutArraySuffix: true});
/*
strWithoutSuffix
zr=deedee
zr=123
ar=one
ar=three
str=3
brr=1
brr=2
brr=3
brr=3 */
console.log('strWithoutSuffix', strWithoutSuffix);