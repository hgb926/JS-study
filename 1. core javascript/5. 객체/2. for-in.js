var phone = {
  company: "애플",
  color: "블루",
  model: "iphone 13 pro",
  price: 1350000,
};

// 값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);
  console.log(phone[data]);
  // console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음, 확인 먼저
console.log('memory' in phone);

// 만약 없으면 넣어줘
if (!("memory" in phone)) {
  phone.memory = "32GB";
}
console.log(phone);



