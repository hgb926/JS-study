

var arr = [10, 20, 30, 40];
console.log(typeof arr); // object

console.log(arr[1]); // 20

console.log(arr[2] ** 2); // 900

arr[1] = 999; // 배열의 데이터에 접근해 수정하는 법
arr[3]++; // 마찬가지.

console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`); // 첫번째 데이터는 항상 0번
console.log(`마지막 데이터: ${arr[arr.length - 1]}`); // 마지막 데이터는 항상 length-1

// 배열 데이터 순회 (전체참조: travis)

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)

var weekDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];

// for (var i = 0; i < weekDays.length; i++) {
//   console.log(`${weekDays[i]}요일!`);
// }

for (var day of weekDays) {
  console.log(`${day}요일!!`);
}

// 배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '오렌지'];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];


