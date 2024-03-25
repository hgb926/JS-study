/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중',
   '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 
삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 
출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

// prompt로 입력받은 값을 변수로 저장
// 만약 includes로 확인한 값이 true라면 배열 splice

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// var userInput = prompt(`현재 멤버: ${tvxq}\n삭제할 이름을 입력하세요.`)

// while (true) {
//   if (tvxq.length === 0) { // 멤버가 다 삭제되면
//     alert(`모든 멤버가 삭제되었습니다.`)
//     break;
//   }
//   var userInput = prompt(`현재 멤버: ${tvxq}\n삭제할 이름을 입력하세요.`)

//   if (tvxq.includes(userInput)) { // 있다면
//     var index = tvxq.indexOf(userInput);
//     tvxq.splice(index, 1)
//     alert(`삭제 완료!\n남은 멤버: ${tvxq}`)

//   } else  { // 없다면
//     alert(`${userInput}은(는) 잘못된 이름입니다.\n다시 입력하세요!`)
//   }
// }

// while (true) {
//   var originMember = prompt(`수정할 멤버를 입력해주세요.\n현재 멤버: ${tvxq}`)
//   if (tvxq.includes(originMember)) {
//     var changeMember = prompt('바꿀 이름을 입력해주세요.')
//     var index = tvxq.indexOf(originMember);
//     tvxq.splice(index, 1, changeMember)
//     alert(`수정완료!\n현재 멤버: ${tvxq}`)
//     break;
//   } else {
//   alert(`정확한 멤버의 이름을 입력해주세요.`)
//   }
// }

// 무한루프

while (true) {
  var menu = +prompt(
    `현재 멤버: ${tvxq}\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  if (menu === 1) {
    var changeMember = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
    alert(`${changeMember}이(가) 추가되었습니다.`);
    tvxq.push(changeMember);
  } else if (menu === 2) {
    while (true) {
      var deleteMember = prompt(`삭제할 멤버의 이름을 입력하세요.`);
      if (tvxq.includes(deleteMember)) {
        var index = tvxq.indexOf(deleteMember);
        alert(`${deleteMember}이(가) 삭제되었습니다.`);
        tvxq.splice(index, 1);
        break;
      } else {
        alert(`정확한 이름을 입력해주세요.`);
      }
    }
  } else if (menu === 3) {
    alert(`프로그램을 종료합니다.`);
    break;
  }
}
