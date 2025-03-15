'use strict';

function User(fname, lname, age, passw) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.passw = passw;
  this.makeOlder = function () {
    this.age++;
  };
}

const userProto = {};
userProto.changePassword = function (newPassw) {
  this.password = newPassw;
};

User.prototype = userProto; // просмотреть больше инфы о прототипе 

const user1 = new User('Oleg', 'Mask', 19, 'qwerty');
console.log(user1);
user1.makeOlder();
console.log(user1);

/// Перевірка типу обт
//console.log();
/*if (user1 instanceof User) {
  console.log('user1 instanceof User');
} else {
  console.log('user1 is not instanceof User');
}*/
