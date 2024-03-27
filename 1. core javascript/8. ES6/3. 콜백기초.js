// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param: ${param}`);
  
  console.log('계산기 작동!!');
  const n1 = 10, n2 = 20;
  const result = param(n1, n2);
  return result;
}

const result = operate(function(n1, n2) { 
  return n1 * n2; 
});

console.log(`result: ${result}`);

// 인자로 함수를 전달

// const abc = '123';

// function add(n1, n2) {
//   return n1 + n2;
// }

// operate 호출 -> 다른 이름이 없는 함수를 전달
// 어떤 데이터든 파라미터로 보낼 수 있지만, 정의되지 않은 변수는 보낼 수 없다.
// 함수의 리턴값은 호출한 곳으로 간다.