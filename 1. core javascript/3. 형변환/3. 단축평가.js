

true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f


true || true;   // t
true || false;  // t
false || true;  // t
false || false; // f

// or 연산 : 첫번째 truthy를 반환
console.log(`hello` || `bye`); // hello
console.log(null || `안녕`); // 안녕

// and 연산 : 첫번째 falsy를 반환
// falsy값이 없을때 맨 마지막 값을 반환
console.log(`메롱` && `즐~~`); // 즐~~
console.log(0 && `룰루랄라`); // 0

if (조건) {
   console.log(`blah blah~~~`);
} 

조건 && console.log(`blah blah~~~~`);

