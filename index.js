"use strict";

// operators
/*let a = 20;
let b = 30;
//a = a + 2;
a += 2;
a -= 3;
a **= 3;
console.log(a);

//let b = 3;
//b++;

//++b;
console.log(50 - ++b);
console.log(b);
console.log(50 - --b);
console.log(b);
*/

// Op && and ||

let ms = 40;
let kms = 50;
let myRate = 40;
/*
if (myRate >= kms && myRate < ms) {
  // and
  console.log("I am kms");
} else if (myRate >= ms) {
  console.log("I am ms");
} else {
  console.log("I am just sportsman");
}
*/
if (myRate >= kms || myRate >= ms) {
  // or
  console.log("I am kms");
} else if (myRate >= ms) {
  console.log("I am ms");
} else {
  console.log("I am just sportsman");
}

let res =
  myRate >= kms || myRate >= ms
    ? console.log("i am a ms") // ? это что-то вроде if
    : console.log("i am juat a sportsman"); // : это что-то вроде else 
let result = myRate >= kms || myRate >= ms || kms < ms; // или возвращает первую правду или последнюю ложь
//console.log(result);
let result1 = myRate <= kms && myRate >= ms && kms < ms; // возвращает первую ложь или последнюю правду
//console.log(result1);

let c = 0;
//console.log(c || 10);
//console.log(c ?? 20); // оператор нулевого слияния
