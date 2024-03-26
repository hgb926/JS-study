

// 객체 생성
// 우리 집 강아지 정보 저장

var dog = {
  name: `뽀삐`,
  kind: `진돗개`,
  age: 3,
  injection: true,
  favorite: [`산책`, `간식`],
  bark: () => console.log(`왈왈!`)
};


var cat = {
  name: `콩순이`,
  kind: `코숏`,
  age: 2,
  injection: true,
  favorite: [`낮잠`, `방 어지르기`],
  hate: 30,
};

var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  },
  글내용: 'ㅇㄹㄴㅇㄹ',
  작성일자: '2024-03-26'
};

console.log(`===================`);

// 객체에 저장된 데이터 참조(조회)

console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
// slice나 사본을 추출하는 메서드는 원본이 바뀌지 않음,
// 따라서 slice().reverse() 이건 원본이 그대로 출력됨

var key = 'name';
console.log(dog.name);
console.log(dog['name']); 
console.log(dog[key]);


// 프로퍼티 수정 (기존에 있는 key로 접근)
console.log(`==================`);

dog.age = 4;
cat.favorite[1] = '실뭉치';
// 왼쪽에 대상을 잡아주고, 오른쪽에서 재할당


// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
cat.friend = `철수`;

console.log(cat);


// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);