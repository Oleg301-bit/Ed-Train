'use strict';

function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHello = function () {
  console.log(`Hello i am ${this.name}`);
};

const example = new Animal('Bob');
example.sayHello(); // Если свойство или метод не найдены у объекта, поиск продолжается в его прототипе.


