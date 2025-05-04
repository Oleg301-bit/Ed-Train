'use strict';

function Player(fName, lName, forehand, backhand, age, rate, city) {
  this.fName = fName;
  this.lName = lName;
  this.forehand = forehand;
  this.backhand = backhand;
  this.age = age;
  this.rate = rate;
  this.city = city;
}

const maLong = new Player('Ma', 'Long', 'Butterfly', 'Donic', 35, 46, 'Dnipro');
const xuXin = new Player('Xu', 'Xin', 'Butterfly', 'Dandonic', 55, 47, 'Kiev');
const oLeg = new Player('O', 'Leg', 'Butterfly', 'Dindonic', 65, 48, 'Odessa');

const players = [maLong, xuXin, oLeg];

function getProps(limAge) {
  if (this.age > limAge) {
    console.log(`you are so old`);
  } else {
    for (const key in this) {
      console.log(`${key} = ${this[key]}`);
    }
  }
}
const getPropsWithThis = getProps.bind(maLong, 50);
const limAge = 40;
for (const player of players) {
  getProps.call(player, limAge);
}
getPropsWithThis()