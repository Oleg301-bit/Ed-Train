'use strict';
/*const user = {
  firstName: 'Jhon',
  lastName: 'Doe',
  age: 20,
  login: 'd_123',
  email: 'kant@gmail.com',
  isMarried: true,
  1: 1,
  'home address': 'Dnipro',
};

const person = new Object(user);
console.log(person);

const arr = new Object(Array());
console.log(arr);

// CRUD
//create
//read
//update
//delete

console.log(user.firstName);
user.phone = '+380 85757577'; // add smth to our object
user.age = 21; // change smth
console.log(user['home address']);
delete user[1];
console.log(user);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let title;
const sportsmen = {
  [title]: 'MS',
};
console.log(sportsmen);*/

/*function setTitle(rate) {
  let title;
  let address = 'Ukrain';
  if (rate >= 60) {
    title = 'MS';
  } else if (rate >= 40 && rate < 60) {
    title = 'KMS';
  } else {
    title = 'ordinary sportsmen';
  }
  const sportsmen = {
    [title]: title, // вычисляемое свойство
    address, //сокращенное свойство
  };
  return sportsmen;
}
console.log(setTitle(100));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Три метода как можно записать метод
/*const user = {
  name: 'John',
  /*say: function () {
    return 'Hello everybody';
  },*/
/*say() {
    return 'Hello everybody';
  },
};
user.say = function () {
  return 'Hello everybody';
};
console.log(user.say());
*/

/// Training
let color = 'green'; /// переменная в качестве свойства
const car = {
  brand: 'Tayota',
  model: 'X5',
  'year realise': 1995,
  transmision: 'mechanics',
  isWell: true,
  color,
  run(driver) {
    return `${driver} is running this car on ${this.brand} ${this.model}`; //  this
  },
  go: (driver) => {
    return `${driver} is running this car on ${this.brand} ${this.model}`;
  },
};
//console.log(car);
console.log(car.run('Oleg'));
console.log('=================================');
console.log(car.go('Oleg'));

////operator in
//console.log('color' in car);

// синтаксический сахар for .. in

for (let key in car) {
  if (typeof car[key] !== 'function') {
    //console.log(`key ${key} = ${car[key]}`);
  }
}

const car2 = new Object(car);
const car3 = car;
//console.log(car === car2);
//console.log(car === car3);

//console.log(car2);
// object копируются по ссылке

////////////////////////////////////////////////////////////////////
const emptyObj = {};
function checkEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}
//console.log(checkEmpty(emptyObj));

//console.log(Object.keys(car).length === 0);// эта строка заменяет блок кода выше

// THIS

const desktop = {
  brand: 'Intel',
};

const laptop = {
  brand: 'Dell',
};

function showBrand() {
  return this.brand;
}

function func() {
  return this;
}

const arrowFunc = () => this;
laptop.show = showBrand;
desktop.show = showBrand;

//console.log(func());
//console.log(arrowFunc());
console.log(laptop.show());
console.log(desktop.show.call(car));

const bindShow = laptop.show.bind(car);
console.log(bindShow());

// constructor
function Car(brand, model, transmision, color) {
  this.brand = brand;
  this.model = model;
  this.transmision = transmision;
  this.color = color;
  this.run = function () {
    return ` One is running this car on ${this.brand} ${this.model}`;
  };
}

const bmw = new Car('BMW', 'X5', 'Auto', 'Black');
const toyota = new Car('toyota', 'camri', 'Auto', 'Black');

console.log(bmw);
console.log(toyota);

const arr = [];
console.log(Array.isArray(toyota));

// Multiply price

const price = {
  tea: 20,
  coffee: 30,
  meal: 50,
  onion: 10,
  waiter: 'Jhon Doe',
  isPaid: false,
};

for (let key in price) {
  console.log(`${key} : ${price[key]}`);
}
function multPrice(bill) {
  for (let key in bill) {
    if (typeof bill[key] === 'number') {
      bill[key] *= 2;
    }
  }
}
multPrice(price);
console.log('=========================');
for (let key in price) {
  console.log(`${key} : ${price[key]}`);
}
