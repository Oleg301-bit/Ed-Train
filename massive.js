'use strict';

// array

const array = new Array(); // first method
const arr2 = Array();
const arr3 = []; // syntax  sugar

const users = [
  { id: 1, name: 'Test' },
  { id: 2, name: 'Test1' },
];
console.log(users);
console.log('Numer of elements', users.length);

const fantasticElem = [1, 'qwerty', { name: 'User1' }];

// перебір обт
const months = ['June', 'July', 'August'];
console.log(months);
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// функ для реализации сумы елементов масива
const numbers = [1, 5, 10, Math.random()];
//console.log(numbers);

function calcSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//const sumOfNumbers1 = calcSum(numbers);
//console.log(calcSum(numbers));

// перебір спеціалізованими циклами
// for..in - key, for..of - items
for (const item of months) {
  console.log(item);
}

// копіювання масивів
const numbers2 = [1, 0, 3, 4];
// copy
const copyNum2 = Array.from(numbers2);
const copyNum3 = [...numbers2];
//console.log(copyNum3);
//console.log(copyNum2);

// методи масивів
const numbers3 = [10, 20, 30];
numbers3.push(40); // add new element to the end
console.log(numbers3);

// example of practice
/*
const elementCount = +prompt('Input here count');
const elements = [];

for (let i = 0; i < elementCount; i++) {
  const elem = +prompt('Input number');
  elements.push(elem);
}
console.log(elements);
*/

//

const removedElement = numbers3.pop(); // delete last element
console.log(numbers3);

/*numbers3.shift();
console.log(numbers3); // прибираємо перший елемент
numbers3.unshift(50);
console.log(numbers3); // додаємо перший елемент
*/
// shift and unshift вик. тільки у крайніх випадках
// копіювання частини масиву

const numbers4 = [100, 200, 300, 400];
const numbersCopy = numbers4.slice();
console.log(numbersCopy);
const numbers4Part = numbers4.slice(2);
const numbers4Part1 = numbers4.slice(1, 3); // вказувати наступний за останній
console.log(numbers4Part);

// Видалення елементів з масиву
numbers4.splice(2, 1);
console.log(numbers4);

const numbers5 = [100, 200, 300, 400];
//numbers5.splice(0, 1);
//console.log(numbers5);
let num6 = numbers5.slice(numbers5.length - 2);
console.log('copy', num6);

// конкатинація масивів
const arr10 = [4, 5, 6];
const arr11 = [1, 2, 3];
const arr30 = arr10.concat(arr11);
console.log(arr30);
const arr40 = [...arr10, ...arr11];
console.log(arr40);
console.log(
  '==========================================================================='
);
// методи перебору масивів
//forEach
const arr100 = [1, 2, 3, 4, 6];
function printItem(item, index, array) {
  console.log(`item [${index}] = ${item} `);
  console.log(array);
}
arr100.forEach(printItem);

// метод map()
function toSqr(item) {
  return item * -1;
}

const arr101 = arr100.map(toSqr);
console.log(arr101);

const users1 = ['Test', 'Test1'];
function getName(item) {
  return item;
}
const names = users1.map(getName);
console.log(names);

// фільтрація (filter)
const arr102 = [2, 3, -10, 16, 7, -8];

function isOdd(item) {
  return item % 2 === 1 ? true : false;
}
const arrOdd = arr102.filter(isOdd);
console.log(arrOdd);

//  практика

const arrTeen = [20, 10, 11, 22, 16, 33];

function isTeen(item) {
  return item >= 18;
}
const result = arrTeen.filter(isTeen);
console.log(result);

// findIndex  до тих пір поки не отримаємо true

function isSixteen(item) {
  return item === 16;
}
const fundIndex = arr102.findIndex(isSixteen);
console.log(fundIndex);
