

// console.log(`김철수님 안녕하세요! 방가방가`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// console.log(`박영희님 안녕하세요! 방가방가`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// console.log(`뽀로로님 안녕하세요! 방가방가`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// 함수 정의(만든다) (관례적으로 동사형)
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요! hello!`);
  console.log(`오늘도 즐거운 하루되세요!!`);
}

// 함수 호출 (사용한다)
sayHello('한기범');

function makeLine() {
  console.log(`==========================`); 
}

makeLine();

// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159;

// 원의 넓이를 구하는 함수
function calcAreaCircle(r) {
  return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);