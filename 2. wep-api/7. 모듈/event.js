
// getDom.js에서 $pText를 가져오기
import { $pText, $btn } from './getDom.js';

console.log($pText);
console.log($btn);
// import x from 에선 ./ 생략 불가능

// 이벤트 핸들러 함수 생성
export const clickHandler = e => {
  $pText.textContent = '안녕';
}