
// var n = 5;

// while (n >= 0) {
//   console.log(n);
//   n--;
// }

var n = 1;
var level = 3904231
while (n <= 9) {
  console.log(`${level} x ${n} = ${level * n}`);
  n++;
}


console.log(`================`);

// 10 ~ 34까지의 정수를 홀수만 출력
var m = 10; // begin

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}


console.log(`====================`);

// 1 ~ 10 까지의 누적합

var total = 0;
var i = 1;

while (i <= 100000) {
  total += i;
  i++;
}
console.log(total);