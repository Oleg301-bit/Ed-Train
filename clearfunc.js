/*const mul = (a, b) => a * b;
const noPureFunction = (a, b) => {
  a = a * Math.random();
  return a + b;
};
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
*/
//let c = 10;

//const add1 = (d) => (c += d);
//console.log(add1(10));
//console.log(c);

// Stack  : last in first out LIFO
//debugger;
/*function greet(person) {
  console.log(`Hello ${person}`);
}
greet('Oleg');
console.log('Bye-Bye');
*/

// Maximum
/*debugger;

function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
//chicken();
console.log(chicken());
*/
/*
const showSmth = (str) => {
  //console.log(`${str}  + smth`);
  return `${str}  + smth`;
};
console.log(showSmth('Stiga'));
*/
// high order function
// Documentation

function getVolumns(ballAmount, wall, diameter) {
  let result = 0;
  for (let i = 1; i <= ballAmount; i++) {
    let innerDiam = diameter + 2 * wall * (i - 2);
    let volume = (Math.PI * innerDiam ** 3) / 6;
    result += volume;
  }
  return result.toFixed(5);
}

const volume = getVolumns(12, 0.01, 0.5);
console.log(volume);
