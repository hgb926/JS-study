// // 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
// function showEvenNumber(n) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       nums.push(i);
//     }
//   }
//   console.log(nums);
// }

// function showOddNumber(n) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       nums.push(i);
//     }
//   }
//   console.log(nums);
// }

// function showOddOrEvenNumber(n, isOdd) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === isOdd) {
//       nums.push(i);
//     }
//   }
//   console.log(nums);
// }

// // showEvenNumber(7);
// // showOddNumber(7);
// showOddOrEvenNumber(7, 0);

// function showTripleNumber(n, x) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % x === 0) {
//       nums.push(i);
//     }
//   }
//   console.log(nums);
// }

// 조건이 많아지고 난해해지면
// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
// 공통된 조건들만 작성해놓고, 세부적인 조건을 전달받을 수 있도록 한다

function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(20, function(hh) {
  return hh % 2 === 1;
});

showNumber(50, ss => ss % 2 === 0);




console.log(`===========================`);




function makeCook(recipeName, recipeCode) {
  console.log(`#### 나만의 맛도리 쩝쩝박사 레시피 ####`);
  console.log(`!!! 요리 이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();

  console.log(`~~~~ 참 쉽죠 여러분도 이대로 만들어 보세요~! ~~~~`);
}

makeCook('맛도리쩝쩝라면', () => {
  console.log(`1. 물 끓이기`);
  console.log(`2. 스프 붓기`);
  console.log(`3. 면 삶기`);
});