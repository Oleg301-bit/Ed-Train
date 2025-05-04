'use strict';
/*function getRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomRange(10, 100));
console.log(Number(getRandomRange(10, 100)).toPrecision(3));
*/

// Number
const numb = 12222222222222222222222222222222222222222222;
console.log(numb.toExponential());
// Date
const date = new Date();
//console.log(date);
//console.log(date.toDateString());
//console.log(date.toISOString());
//console.log(date.toLocaleDateString());
//console.log(Date.now().toExponential());
// String
let sams = ' Samsung';
let gap = ' ';
let nokia = 'Nokia ';
let together = sams.concat(gap, nokia, true);
let end = nokia.padEnd(20, "/'");

console.log(sams.length);
console.log(sams.charAt(5));
console.log(sams.charCodeAt(5));
console.log('---------------------------------------');
console.log(together);
console.log(together.includes('s', 3));
console.log(together.indexOf('', 100));
console.log(together.lastIndexOf('a'));
console.log(nokia.repeat(8));
//console.log(nokia.padEnd(20, "/'"));
console.log(end);
console.log('---------------------------------------');
console.log(together.slice(2, 5));
console.log(together.split(' '));
console.log(together.toLowerCase());
console.log(together.toUpperCase());
console.log(together.trim().split(' '));


