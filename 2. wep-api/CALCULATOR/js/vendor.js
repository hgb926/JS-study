// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.getElementById('input-number');

const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;

// 하단 ul, list
const $ul = document.querySelector('.log-entries')

let count = 0;




//=============== 함수 정의 영역 =================//



// 계산 기능 헬퍼 함수
const calculate = (e) => {
  // 더하기를 해야 함 
  // 계산 전 값을 백업
  const prevResult = currentResult;
  
  if (e.target === $addBtn) {
    // 1. 입력창에 입력한 숫자를 읽어와야 함.
    const enteredNumber = +$userInput.value;
  
    // 2. 결과에 누적
    currentResult += enteredNumber;
    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} + ${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    makeLogs(descriptionLog)
  } else if (e.target === $subtractBtn) {
    
    const enteredNumber = +$userInput.value;
  
    currentResult -= enteredNumber;

    $currentResult.textContent = currentResult;

    const descriptionLog = `${prevResult} - ${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    makeLogs(descriptionLog)
  } else if (e.target === $multiplyBtn) {

    const enteredNumber = +$userInput.value;
  
    currentResult *= enteredNumber;

    $currentResult.textContent = currentResult;

    const descriptionLog = `${prevResult} x ${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    makeLogs(descriptionLog)
  } else if (e.target === $divideBtn) {

    const enteredNumber = +$userInput.value;
  
    currentResult /= enteredNumber;

    $currentResult.textContent = Math.floor(currentResult * 100) / 100;

    const descriptionLog = `${prevResult} ÷ ${enteredNumber}`;
    // $currentCalculation.textContent = Math.floor(descriptionLog * 100) / 100;
    $currentCalculation.textContent = descriptionLog;

    makeLogs(descriptionLog, $currentResult)
  }
};


// 부모인 $ul의 자식으로 $li들을 생성하고 추가해야 한다
// 밑에 로그를 띄우는 함수를 하나 만들어서, 각 버튼마다 하단에 그 함수를 호출.

function makeLogs(descriptionLog) {
  const $newDiv = document.createElement('div')
  const $newLi = document.createElement('li')
  $newDiv.classList.add('log-entries__item')
  $ul.appendChild($newDiv);
  count++;
  $newLi.textContent = `${count}. ${descriptionLog} = ${$currentResult.textContent}`;
  $newDiv.appendChild($newLi);

}