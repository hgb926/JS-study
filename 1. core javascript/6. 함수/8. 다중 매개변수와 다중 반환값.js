
function add2(n1, n2) {
  return  n1 + n2;
}

function add3(n1, n2, n3) {
  return  n1 + n2 + n3;
}
var n1 = add2(5, 9, 2);

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다.

function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread 문법
function addAllES6(...numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}


var r1 = addAll([5, 9, 2]);
console.log(r1);

var r2 = addAllES6(10, 20, 30);
console.log(r2); // 60

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
// 그래서 여러개의 값을 반환하고싶으면 한개의 바구니에 담는다
// 배열, 객체 중 적합한 자료형을 선택해서 담는다

function arithmeticOperate(n1, n2) {
  return {
      add: n1 + n2,
      sub: n1 - n2,
      multi: n1 * n2,
      div: n1 / n2,
    };
}
// 변수는 2회 이상 사용될때 사용하는게 좋음.

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`)
console.log(`뺄셈결과: ${r3.sub}`)
console.log(`곱셈결과: ${r3.multi}`)
console.log(`나눗셈결과: ${r3.div}`)

var r4 = arithmeticOperate(5, 3).multi;
console.log(r4);

function foo() {
  return 10;
}

