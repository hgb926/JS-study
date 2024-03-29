

const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '2022-01-30',
  birthDate: '2015-12-31'
};

const { empName, hireDate } = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);

function foo({empName, age}) {

  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

const { age: empAge, birthDate } = employee; // x: xx 변수 이름 재 지정
console.log(empAge);

const dog = {
  kind: '말티즈',
  name: '해피',
  age: 3,
  injection: false
};

const { kind, age: petAge, ...rest } = dog;
console.log(kind);
console.log(petAge);
console.log(rest);

// 객체 안전 복사
const copyDog = { ...dog };
copyDog.age = 10;

// 복사 중 같은 Key, 다른 값을 넣어주면 덮어씌운다
const copyDog2 = {
  ...dog,
  age: 20,
  favorite: '산책'
};

console.log(copyDog2);
console.log(dog);
console.log(copyDog);

