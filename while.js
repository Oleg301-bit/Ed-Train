'use strict';
/*let count = 12;

while (count < 10) {
  console.log(count);
  count++;
}

// do-while
do {
  console.log(count);
  count--;
} while (count < 10);*/

// for
/*for ( let count = 0; count < 10; count++) {
  console.log(`${count * 2}`);
  
}*/

// multiply table
/*
outer: for (let i = 1; i < 10; i++) {
  inner: for (let j = 1; j < 10; j++) {
    if (i === 5) continue outer;
    if (j === 5) continue;
    console.log(`${i} *  ${j} = ${i * j}`);
  }
}
*/

// train task

const max = 100;
let result = 0;
for (let number = 10; number <= max; number++) {
  result += number;
}
console.log(result);
//console.log('yes');
