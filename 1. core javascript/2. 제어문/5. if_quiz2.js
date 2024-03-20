

// var int_A = +prompt(`정수 A`);
// var int_B = +prompt(`정수 B`);
// var int_C = +prompt(`정수 C`);

// if (int_A === int_B && int_A === int_C) {
//   alert(`세 수가 모두 같습니다.`)
// } else if (int_A === int_B && int_A !== int_C) {
//   alert(`두 수가 같습니다.`)
// } else {
//   alert(`같은 수가 없습니다.`)
// }

// 완료

// var int_A = +prompt(`정수 A`);
// var int_B = +prompt(`정수 B`);

// if (int_A >= int_B) {
//   alert(`두 수의 차는 ${int_A - int_B}입니다.`)
// } else {
//   alert(`두 수의 차는 ${int_B - int_A} 입니다.`)
// }

// 완료


var int_A = +prompt(`정수 A`);
var int_B = +prompt(`정수 B`);
var int_C = +prompt(`정수 C`);

if (int_A <= int_B && int_A <= int_C) {
  alert(`최소값은 ${int_A}입니다.`)
} else if (int_B <= int_A && int_B <= int_C) {
  alert(`최소값은 ${int_B}입니다.`)
} else if (int_C <= int_A && int_C <= int_B) {
  alert(`최소값은 ${int_C}입니다.`)
}

//완료