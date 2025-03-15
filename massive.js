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
console.log(numbers);

function calcSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//const sumOfNumbers1 = calcSum(numbers);
console.log(calcSum(numbers));

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
console.log(copyNum3);
console.log(copyNum2);
