// function getMin(n1, n2) {
//   if (n1 > n2) {
//     return n2;
//   } else {
//     return n1;
//   }
// }

// console.log(`result: ${getMin(134, 56)}`);

// function getMin(n1, n2, n3) {
//   if (n1 < n2 && n1 < n3) {
//     return n1;
//   } else if (n2 < n1 && n2 < n3) {
//     return n2;
//   } else {
//     return n3;
//   }
// }

// console.log(getMin(120, 50, 99));

function checkNum(n) {
  return n % 2 === 0 ? true : false;
}

console.log(checkNum(53));