'use strict';
//let a;
const arr1 = [1, 2, 3];
//arr1.forEach((el) => {
//  console.log(el * 5);
//});
//console.log(
//  arr1.forEach((el, i, arr1) => {
//    arr1[i] = el * 5;
//  })
//);
//console.log(arr1);
// own implementation of forEach

function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }
}
myForEach(arr1, (el) => {
  console.log(el);
});

/// find (true/false)

//const arr2 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];

//console.log(arr2.findIndex((el) => el === 'DHS'));
console.log(arr1.findLastIndex((el) => el % 2 === 0));

// map
const strIntArr = ['1', '5', '10'];
const intArr = strIntArr.map((el) => parseInt(el) * 10);
//console.log(intArr);

// implement(map)
function myMap(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.apply(thisArg, [arr[i], i, arr]));
  }
  return result;
}
//console.log(myMap(strIntArr, parseInt()));

// some / every
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.some((el) => el % 2 === 1));
console.log(arr3.every((el) => el % 2 === 1));

// implement of some()
const mySome = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
console.log(mySome(arr3, (el) => el % 2 !== 0));
// every
const myEvery = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
console.log(myEvery(arr3, (el) => el % 2 === 0));

// filter
const arr4 = [1, 2, 3, 45, 6, 7, 8, 9];
const arr5 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];
const user = {
  fullName: 'Jhom Doe',
  role: 'moderator',
};
const smith = {
  fullName: 'Jame Smith',
  role: 'admin',
};
const persons = [user, smith];
console.log(arr4.filter((el) => el > 8));
console.log(arr5.filter((el) => el[0] === 'D'));
console.log(persons.filter((el) => el.role === 'admin'));

// implementation filter
function myFilter(arr, callback, thisArg) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}
// reduce and reduceRight
// pseudocode
/*
 array.reduce(callback,[initialValue]);
 callback(accum,currentValue,[index,array]);
 if (initialValue) {
 accum = initialValue;
 currentValue = array[0];
 } else {
    accum = array[0];
    currentValue = array[1]; 
 }
*/
const emptyArr = [];
console.log(emptyArr.reduce((a, b) => a + b, 10));

const friends = [
  {
    name: 'Ann',
    books: ['HP', 'Python'],
    age: 20,
  },
  {
    name: 'Jhon',
    books: ['JS', 'Hibernate'],
    age: 25,
  },
  {
    name: 'Bill',
    books: ['Java', 'SQL'],
    age: 30,
  },
];
const allBooks = friends.reduce((prev, curr) => [...prev, ...curr.books], []); // spread
console.log(allBooks);

// own reduce
const myReduce = (arr, callback, startValue) => {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      result = callback(result, arr[i + 1], i, arr);
    }
  }
  return result;
};

const arrArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myReduce(arrArr, (a, b) => a.concat(b)));
