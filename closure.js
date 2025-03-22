'use strict';

/*
const showSmth = (str) => {
  function aaa() {
    let bb = 'bb';
  }

  return `${str} + smth`;
};
console.log(showSmth('Stiga'));
*/
// Замыкание/Сборка мусора - функция которая запоминает свои внешние переменные и может получить к ним доступ
/*let count = 0;

function counter() {
  //let count = 0;
  return ++count;
}
console.log(counter());
*/
//debugger
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const counter1 = counter();
console.log(counter1);
