

// 1 ~ 100 사이의 랜덤정수
// random() * (y - x + 1) + x


for (;;) {
  var rn = Math.floor(Math.random() * 100) + 1;
  console.log(rn);
  if (rn === 1) break;
}

