


const DIFFICULT = 1, MIDDLE = 2, EASY = 3;
var levelMessage = `~~~~~~~ 난이도를 설정합니다 ~~~~~~~~
[ 1. 상 || 2. 중 || 3. 하 ]`

var level = +prompt(levelMessage);

var maxNumber;

switch (level) {
  case DIFFICULT:
    maxNumber = 100;
    break;
  case MIDDLE:
    maxNumber = 50;
    break;
  case EASY:
    maxNumber = 20;
    break;
    default:
      maxNumber = 9999;  
}

// ↑미해결


var qNum = 1; // 문제 번호

var correctCount = 0;
var wrongCount = 0;


while (true) {

  // 난수 생성
  var firstNumber = Math.floor(Math.random() * 20) + 1;
  var secondNumber = Math.floor(Math.random() * 20) + 1;
  if (firstNumber <= secondNumber) {
    continue;
  }

  // 0, 1, 2 중에 하나가 생성되는 난수
  var markNum = Math.floor(Math.random() * 3);
  
  // 연산 기호를 문자열로 저장
  var mark = 'x'
  
  // 실제 정답
  var realAnswer = firstNumber + secondNumber;

  // 변환
  switch (markNum) {
    case 0:
      mark = '+';
      realAnswer = firstNumber + secondNumber;
      break;
    case 1:
      mark = '-';
      realAnswer = firstNumber - secondNumber;
      break;
    case 2:
      mark = '*';
      realAnswer = firstNumber * secondNumber;
      break;
  }

  // 사용자의 입력답
  var userAnswer = +prompt(`Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`)

  if (userAnswer === 0) {
    alert('게임을 종료합니다.');
    break;
  }

  // 정답 검증
  if (userAnswer === realAnswer) {
    alert(`정답입니다.`);
    correctCount++;
  } else {
    alert(`틀렸습니다.`)
    wrongCount++;
  }
}

// each game loop

alert (`# 정답횟수: ${correctCount}회, 오답횟수: ${wrongCount}회.`)