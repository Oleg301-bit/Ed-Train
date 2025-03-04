"use strict";

let year = +prompt("Enter  year, pls");
console.log(year);

/*if (Number.isNaN(year)) {
  console.log("Try again please");
} else if (year % 100 === 0) {
  if (year % 400 === 0) {
    console.log("This is a leap year");
  } else {
    console.log("Tis is not a leap year");
  }
} else if (year % 4 === 0 && year > 4) {
  console.log("It is a leap year");
} else {
  console.log("This is not a leap year");
}*/
if (Number.isNaN(year)) {
  console.log("Try again please");
} else {
  year % 4 === 0 &&
    (year % 100 !== 0 || year % 400 === 0) &&
    year > 4 &&
    console.log("This is  a leap year");
  (year % 4 === 0 && 
    (year % 100 !== 0 || year % 400 === 0) 
    && year > 4) ||
    console.log("This is not a leap year");
}

//strangeness of isNan()

//console.log(Number.isNaN(NaN));
//console.log(isNaN());
//console.log(new Date().toString());
