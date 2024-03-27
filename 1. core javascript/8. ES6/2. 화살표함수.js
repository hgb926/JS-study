
// 화살표 함수

// 중괄호 안에 코드가 한줄이라면 중괄호, return 제거
function add(n1, n2) {
  return n1 + n2;
}
const add = (n1, n2) =>  n1 + n2;

const r1 = add(5, 10);
console.log(r1);

// 중괄호 안에 코드가 두줄이라면
const sayHello = () => {
  console.log(`안녕하세요`);
  console.log(`수고하세요`);
  return '에베베';
};
sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다.')
};
kim.dance();
kim.greeting();

// 파라미터가 한개일 경우 소괄호 생략 가능!
// const pow = (n) => n*n;
const pow = n => n*n;

const pow1 = pow(5);
console.log(pow1);