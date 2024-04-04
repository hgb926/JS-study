

import { $btn as $button } from './getDom.js'; // 불러온 변수
import { clickHandler } from './event.js';
import hhaa from './pow.js';

const $btn = '123'; // 내가 만든 변수
console.log(`btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

console.log(hhaa.pow(130));
console.log(hhaa.add(130, 12));


// 내가 만든 변수와 불러온 파일 중 변수가 겹칠 때는,
// import로 받을 때 (기존 변수) as (새로 지을 변수)

// event.js 에서 만든 이벤트 핸들러 등록
$btn.addEventListener('click', clickHandler);
