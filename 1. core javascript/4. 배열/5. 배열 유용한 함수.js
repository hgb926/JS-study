var foodList = ["닭꼬치", "볶음밥", "짜장면", "족발"];

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
// 존재하지 않으면 -1 리턴
var target = "짜장면";

var index = foodList.indexOf(target);
console.log(`index: ${index}`); // 2

// includes(): 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes(`족발`);
console.log(`flag: ${flag}`); // true

// slice(): 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3); // index 1부터 3미만까지
console.log(sliced); // [ '볶음밥', '짜장면' ]
var sliced2 = foodList.slice(3); // index 3번부터 끝까지
var sliced3 = foodList.slice(); // 전체 복사

// reverse(): 배열을 역정렬
// 원본이 변경됨
// 그래서 copy를 하고 사용해야 함
var nums = [10, 20, 30, 40, 50];
nums.reverse();

console.log(nums);

// concat(): 배열을 결합한 사본을 갖다줌, 원본 변하지않는다
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);

// splice(); 배열의 삭제 및 삽입
// 원본에서 삭제 삽입을 진행하므로 원본이 손상됨

foodList.splice(1, 2); // index 1부터 2개 지우세요(1포함)
foodList.splice(2, 1); // index 2부터 1개 지우세요(2만 삭제)

console.log(foodList); // [ '닭꼬치', '족발' ]

foodList.splice(0, 1, "파스타", "보쌈"); // 0번 인덱스 지우고 그자리에 추가

console.log(foodList); // [ '파스타', '보쌈', '족발' ]

foodList.splice(2, 0, "마라탕"); // 2번 index에 마라탕을 추가

console.log(foodList);

foodList.splice(2); // 2번부터 끝까지 싹 지워
console.log(foodList);
console.log(`========`);

var arrlist = [0, 1, 2, 3, 4, 5];
arrlist.splice(2);
console.log(arrlist);
