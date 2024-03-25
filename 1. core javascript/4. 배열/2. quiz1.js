

var scores = [83, 99, 100, 57, 100, 100, 61];
var sum = 0;
var avg = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
avg = sum / scores.length;

console.log(`총점 : ${sum}점, 평균 : ${avg}점`);