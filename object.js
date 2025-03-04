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
    return `${driver} is running this car`;
  },
};
/*console.log(car);
console.log(car.run('Oleg'));
console.log('=================================');
////operator in*/
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
console.log(checkEmpty(emptyObj));

console.log(Object.keys(car).length === 0);// эта строка заменяет блок кода выше
