var n1 = +prompt(`정수 a를 입력하세요.`)
var n2 = +prompt(`정수 b를 입력하세요.`)

var total = 0;

while (n1 <= n2) {
  total += n1;
  n1++;
}
alert(`${n1} ~ ${n2}까지의 누적합: ${total}`)

// var n = +prompt(`양의 정수를 입력!`)
// var text = '';
// let i = 1;
// while (i <= n) {
//   if (i % 2 === 1) {
//     text += '+';
//   } else {
//     text += '-';
//   }
//   i++;
// }
// alert(text)

