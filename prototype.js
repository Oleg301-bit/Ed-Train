'use strict';
// ___proto__ prototype
const animal = {
  type: 'common',
  limbAmount: 4,
  move() {
    console.log('I can move');
  },
  eat() {
    console.log('I can eat anything');
  },
};

const mammal = {
  type: 'mammal',
  eat() {
    console.log('I ate milk in my childhood');
  },
};

const cat = {
  name: 'cat',
  maxWeight: 30,
  maxAge: 20,
  move() {
    console.log('I can run');
  },
};

mammal.__proto__ = animal; // example
cat.__proto__ = mammal;
console.log(mammal.limbAmount);
cat.eat();

const sonya = Object.create(cat, {
  name: {
    value: 'Sonya',
    enumerable: true,
  },
});
console.log(sonya);
// cat.type  cat.__proto__ mammal.__proto__ animal.__proto__ Object

const myArr = [10];
console.log(myArr.valueOf());

// practice

function Country(title = 'Ukraine', capital = 'Kiev') {
  this.title = title;
  this.capital = capital;
  //this.getInfo = function () {
  //  return `Capital is ${this.capital}`;
  //};
}

Country.prototype.getInfo = function () {
  return `Capital is ${this.capital}`;
};
const ukraine = new Country();
const usa = new Country('USA', 'Washington');

console.log(ukraine.getInfo());
console.log(usa.getInfo());

console.log(ukraine.getInfo === usa.getInfo);
console.log(ukraine);

console.log(usa instanceof Country);

// arguments-spread-rest

function someFunc(a) {
  return arguments;
}

const funcExp = function (a) {
  return arguments;
};

const arrowFunc = (a, ...args) => args;

console.dir(someFunc);
console.dir(funcExp);
console.dir(arrowFunc);

console.log(someFunc(1));
console.log(arrowFunc(1, 5, true, {}));
////////////////////////////////////////////// practice //////////////////////////////////////////////
function MyArray(...args) {
  this.length = 0;
  this.push = function (item) {
    this[this.length] = item;
    return ++this.length;
  };
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
}

MyArray.prototype = new MyArrayProto();
const myArr1 = new MyArray(10);
const myArr2 = new MyArray(100, 500, 700, 1000);

console.log(myArr1);
console.log(myArr2.pop());

console.dir(myArr1);
//console.log(myArr2);

function MyArrayProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };
  this.some = function (fn) {
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.every = function (fn) {
    for (let i = 0; i < this.length; i++) {
      if (!fn(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  this.map = function (fn) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      res.push(fn(this[i], i, this));
    }
    return res;
  };
  this.concat = function (...args) {
    const res1 = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(args[i])) {
        res1.push(...args[i]);
      } else if (MyArray.isArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) {
          res1.push(args[i][j]);
        }
      } else {
        res1.push(args[i]);
      }
    }
    return res1;
  };
  // reverse
  this.reverse = function () {
    const lengthMinusOne = this.length - 1;
    let temp;
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      //temp = this[i];
      //this[i] = this[lengthMinusOne - i];
      //this[lengthMinusOne - i] = temp;
      [this[i], this[lengthMinusOne - 1]] = [this[lengthMinusOne], this[i]];
    }
    return this;
  };
}
console.log(myArr2.reverse());
//const myArrMix = new MyArray(1);
//console.log(myArr2.concat([1, 3], true, myArr2)); // ????

let a = 10;
let b = 100;

[a, b] = [b, a];
console.log(a);
console.log(b);

/// destructure

const person = ['Oleg', 'Vivaldi'];
let [fName, lName] = person;
console.log(fName);
console.log(lName);


//let fName = person[0];
//let lName = person[1];
