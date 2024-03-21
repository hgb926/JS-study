

// var n = +prompt(`양의 정수를 입력하세요!!`)

// var sum = '';

// for (let i = 2; i <= n; i = i*2) {
//   sum += i + ' ';
// }
// alert(sum)

var n = +prompt(`양의 정수를 입력하세요!!!`)
var count = 0;
var text = '';


for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    text += `${i}\n`;
    count++;
  }
}
alert(`${text}약수의 갯수는 ${count}개 입니다.`)