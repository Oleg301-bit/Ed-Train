'use strict';
const arr1 = [90, 80];
const numObj = {
  0: 0,
  1: 1,
  2: 2,
};

console.log(arr1);
console.log(numObj);

const arrStr = new Array('Stiga', 'DHS'); // if only one number empty * 10 only when we use number
console.log(arrStr);

// create
arr1[2] = 50;
console.log(arr1);
// read
// update
arr1[2] = 70;
console.log(arr1);

const fruits = [
  'Apple',
  'Orange',
  'Pear',
  'Peach',
  'pineapple',
  'Plum',
  'Pineapple',
];
fruits[2] = 'mango';
console.log(fruits);
// delete
//delete fruits[3]; // not useful tool
console.log(fruits[3]);
console.log(fruits.at(-3)); // get the element of the massive
//console.log(fruits);

// push - add  the element to the end of massive pop  - delete the  end element

const arrOf = Array.of(10, 11, 13);
console.log(arrOf);
console.log(fruits.concat(arr1, () => {}, {}, NaN));
//console.log(arrOf.fill(2, 1, 5));
console.log(arrOf);

const arrMulty = [1, [2, 3], [4, 5, [6, 7]]];
console.log(arrMulty.flat(2));
console.log(fruits.join(' '));
console.log(arr1.join(' '));
console.log(fruits.includes('apple'));
console.log(fruits.indexOf('apple'));
//console.log(fruits.reverse());

const subFruits = fruits.slice(1, 5);
console.log(subFruits);
console.log(fruits.sort());

const numbArr1 = [12, 23, 34, 56, 78, 89, 100, 1000];
console.log(numbArr1.sort((a, b) => a - b));

console.log(fruits.splice(2, 2, 'Blubery'));
console.log(fruits);

console.log(numbArr1.with(2, 500));

// practice
/*const str1 = 'Montenegro';
const str2 = 'I like to write code';

const separator = ' ';
const reverseString = (str1, separator) =>
  str1.split(separator).reverse().join(separator);
console.log(reverseString(str2, separator));
*/
const str1 = 'Montenegro';
const str2 = 'Аргентина манит меня';

const sep = '';
const reverseLine = (str) => {
  const sep = '';
  const strWithOutGapes = str.toLowerCase().replaceAll(' ', sep);
  console.log(strWithOutGapes);
  const reverseString = strWithOutGapes.split(sep).reverse().join(sep);
  return reverseString;
};
reverseLine(str2);

// наследование - иерархия классов 