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

// Рекурсия
// Iteration
/*function fibo(n) {
  let fib1 = 1;
  let fib2 = 1;
  for (let i = 3; i <= n; i++) {
    const fibNext = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibNext;
  }
  return fib2;
}
console.log(fibo(7));
*/
// recursion

function fibonacci(position) {
  if (position < 3) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log(fibonacci(8));


