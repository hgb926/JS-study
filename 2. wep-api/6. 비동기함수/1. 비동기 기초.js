

// 비동기함수 setTimeout
// 코드를 순서대로 진행시키는게 아닌 시간차로 진행시킬 수 있게 함.



setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(`hello${i}`);
  }
}, 0);

setTimeout(() => {
  for (let i = 0; i < 4; i++) {
    console.log(`bye${i}`);
  }
}, 0);

// 코드는 위에서부터 순서대로 간다. 이게 동기식 처리
