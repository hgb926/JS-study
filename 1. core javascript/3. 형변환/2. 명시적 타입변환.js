

var x = `30.5`, y = `40.5`;

var result = Number(x) + Number(y);
var result2 = parseInt(x) + parseInt(y);

console.log(result);
console.log(result2);


var m = ``+ 10 + 20;
console.log(m);


console.log(`================`);

console.log(Boolean(`hello`)); // true
console.log(Boolean(null)); // false 
console.log(!! 999); // true
console.log(!! undefined); // false



// 회원 로그인 여부 확인
function isLogin() {
  const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  return token !== null;
}
