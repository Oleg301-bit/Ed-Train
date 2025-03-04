'use strict';
const user = {
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

/*const arr = new Object(Array());
console.log(arr);*/

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
