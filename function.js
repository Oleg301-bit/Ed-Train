'use strict';
// Function Declaration
/*function summ(a, b) {
  return a + b;
}
//console.log(summ(10, 20));

//Function Expression
const showDevide = function (c, d) {
  return summ(c,d);
};
console.log(showDevide(20, 5));
/*
const newFunc = summ;
console.log(newFunc(2,5));*/

// Check age

let age = 20;
let welcome;
if (age < 18) {
  /*function welcome() {
    console.log('You are too young');
  }*/
  welcome = function () {
    console.log('You are too young');
  };
  //welcome();
} else {
  /*function welcome() {
    console.log('You are enough to enter');
  }*/
  welcome = function () {
    console.log('You are enough  age to enter');
  };
  //welcome();
}
//welcome();

// Arrow function

/*const function3 = (par) => {
  console.log(par);
  return par * 2;
};*/
// another example
/*
const function3 = (par,par2) => par ** par2;
console.log(function3(5,9));*/

let brand = 'Stiga';
let ttBlade = 'Donic';

function changeArg(brand = 'tsp', ttBlade = 'xiom') {
  //brand = 'Batterfly';
  //ttBlade = 'DHS';
  //console.log(brand);
  //console.log(ttBlade);
  return `${brand} + ${ttBlade}`;
}
//console.log(changeArg());
//console.log(changeArg(brand, ttBlade));
//console.log(brand,ttBlade);

function add(a, b) {
  return (a ?? 10) + (b ?? 20);
}
//console.log(add(0));

// Training //
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

const calc = (num1, num2, mathOperation) => {
  if (Number.isNaN(num1 - num2)) {
    return 'Enter number please!';
  }
  let operation;
  switch (mathOperation) {
    case '+': {
      operation = sum;
      break;
    }
    case '-': {
      operation = sub;
      break;
    }
    case '*': {
      operation = mul;
      break;
    }
    case '/': {
      operation = div;
      break;
    }
    default:
      console.log('Unknown math operation');
  }
  if (typeof operation === 'function') {
    return operation(num1, num2);
  } else {
    console.log('Unknown math operation');
  }
};
const userInput = Number(+prompt('Enter first number please')) ? userInput : console.log('Enter number please');
const userInput2 = +prompt('Enter second number please');
const mathOperation = prompt('Enter math operation');

const result = calc(userInput, userInput2, mathOperation);
console.log(result);
