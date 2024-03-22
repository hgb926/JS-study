

// alert(`[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!! ]`)

// var rn = Math.floor(Math.random() * 50) + 1 // 난수 생성
// while (true) {
//   var input = +prompt(`숫자를 입력하세요! [ 1 ~ 50 ]`)
//   if (input > rn) {
//     alert(`DOWN!!`)
//   } else if (input < rn) {
//     alert(`UP!!`)
//   } else {
//     alert(`딩동댕!`)
//     break;
//   }
// }

// // 해결

// alert(`[ 1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!! ]`)

// var rn = Math.floor(Math.random() * 50) + 1 // 난수 생성
// var count = 5; // 카운트
// while (true) {
//   var input = +prompt(`숫자를 입력하세요! [ 1 ~ 50 ]`)
//   if (input > rn) {
//       --count;
//       alert(`DOWN!! 기회가 ${count}번 남았습니다.`)
//     } else if (input < rn) {
//       --count;
//       alert(`UP!! 기회가 ${count}번 남았습니다.`) 
//     } else {
//       alert(`딩동댕!`)
//       break;
//     }
//     if (count === 0) {
//       alert(`기회를 모두 소진했습니다. 게임오바!`)
//       break;
//     }
// }


// while (true) {
//   alert(`[ 난이도를 설정하세요 ~~~ ^^ ]`)
//   var level = +prompt(`[ 1. 상 (기회 3번) | .2 중 (기회 6번) | 3. 하 (기회 10번) ]`)
//   if (level === 1) {
//     count = 3;
//   } else if (level === 2) {
//     count = 6;
//   } else if (level === 3) {
//     count = 10;
//   } else {
//     alert(`1 ~ 3 을 입력해 주세요!`)
//     continue;
//   }
//   break;
// }



// var upn = 50;
// var donwn = 1;
// var rn = Math.floor(Math.random() * 50) + 1 // 난수 생성
 
// while (true) {
//   while (true) {
//     var input = +prompt(`[ 1 ~ 50 사이의 무작위 숫자를 ${count}번 안에 맞춰보세요!! ]`)
//     if (input > rn) {
//         --count;
//         upn = input;
//         alert(`DOWN!! 기회가 ${count}번 남았습니다.\n[${donwn} ~ ${upn}]`)

//       } else if (input < rn) {
//         --count;
//         donwn = input;
//         alert(`UP!! 기회가 ${count}번 남았습니다.\n[${donwn} ~ ${upn}]`)

//       } else {
//         alert(`딩동댕!`)
//         break;
//       }

//       if (count === 0) {
//         alert(`기회를 모두 소진했습니다. 게임오바!`)
//         break;
//       }
//   }

//   var exitFlag = confirm('한번 더?');
//   if (!exitFlag) {
//     alert(`잘가`);
//     break;
//   } 
// }


// 해결!

// alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]`)
// var win = 0;
// var fail = 0;

// // 부호를 변수로 지정,

//   while(true) {
//     var rn1 = Math.floor(Math.random() * 50) + 1 // 난수 생성
//     var rn2 = Math.floor(Math.random() * 25) + 1 // 난수 생성 (rn1보다 작게)

//     var input = +prompt(`${rn1} ${mark} ${rn2} = ??`)
//     if (input === +(`${rn1} ${mark} ${rn2}`)) {
//       ++win;
//       alert(`정답입니다!`)
//     } else if (input !== +(`${rn1} ${mark} ${rn2}`) && input > 0) {
//       ++fail;
//       alert(`틀렸어요~`) 

//     } else if (input === 0) {
//       alert(`게임을 종료합니다!`)
//       alert(`정답 횟수 : ${win}회, 틀린 횟수 : ${fail}회`)
//       break;
//     }
//   }



alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]`)
var win = 0;
var fail = 0;

// 출력할 부호를 변수로 지정,

while(true) {
  while(true) {
    var markNum = Math.floor(Math.random() * 4) + 1 // 랜덤 부호 생성
    var mark;
    var plus = '+';
    var minus = '-';
    var multiple = 'x';
    var rn1 = Math.floor(Math.random() * 50) + 1 // 난수 생성
    var rn2 = Math.floor(Math.random() * 25) + 1 // 난수 생성 (rn1보다 작게)
    var result = 0;
    var plus_sum = rn1 + rn2;
    var minus_sum = rn1 - rn2;
    var multiple_sum = rn1 * rn2;

    if (markNum === 1) {
      mark = plus;
      result = plus_sum;
      break;
    } else if (markNum === 2) {
      mark = minus;
      result = minus_sum;
      break;
    } else if (markNum === 3) {
      mark = multiple;
      result = multiple_sum;
      break;
      }
    }
    var input = +prompt(`${rn1} ${mark} ${rn2} = ??`)
    if (input === result) {
      ++win;
      alert(`정답입니다!`)
    } else if (input !== result) {
      ++fail;
      if (input !== 0) {
      alert(`틀렸어요~`) 
    } 
    // else if (input === 0) {
    //   alert(`게임을 종료합니다!`)
    //   alert(`정답 횟수 : ${win}회, 틀린 횟수 : ${fail}회`)
    //   break;
    // }
    if (input === 0) {
    var stop = confirm(`정답 횟수 : ${win}회, 틀린 횟수 : ${fail}회\n그만할거야?`)
    if (!stop) {
      alert(`게임을 종료합니다!`)
      break;
    }
  }
}
}