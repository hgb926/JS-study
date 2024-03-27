var x = 99; // global scope : 전역 변수

function foo() {
  var x = "홍길동"; // local scope: 지역 변수
  console.log(`foo x: ${x}`);
}

foo();
console.log(`x: ${x}`);

console.log("===================");

// 중첩 함수: 함수 안에 함수를 정의

function outer(m) {
  var n = "outer local n";
  var v = "outer local v";
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수: 바깥쪽 함수 전용 함수(바깥쪽 함수에서 밖에 실행되지 않음)
  function inner() {
    console.log(n);
    var m = `inner local m`;
    console.log(m);
  }
  inner();
}
outer('outer param m');
