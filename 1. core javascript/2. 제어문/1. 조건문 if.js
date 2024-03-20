


/*

  랜덤 정수 생성하기 : Math.random()

*/
var randomNumber = Math.random();
var randomInt = Math.floor(randomNumber * 100 ) + 1;


/* 랜덤 범위 정수값 공식
x이상 y이하의 랜덤정수 생성
큰 수 빼기 - 작은 수 + 1 + 작은 수
Math.floor(Math.random() * (y - x + 1)) + x

# 117 ~ 142 사이 랜덤정수
Math.floor(Math.random() * (142 - 117 + 1)) + 117
Math.floor(Math.random() * 26)) + 117
*/



var score = randomInt;
console.log(`점수: ${score}점`);

if (score >= 60) {
  console.log(`합격하셨어요~~`);
} else {
  console.log(`탈락!`);
}