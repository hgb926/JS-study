/*
1. 할일 등록하기
1-1. form안에 텍스트값을 받는다.
1-2. 추가할 li의 텍스트값으로 받는다.
1-3. add버튼 클릭 -> ul의 새 자식으로 추가.

2. 
*/

const $input = document.getElementById('todo-text') // input
const $toDoList = document.querySelector('.todo-list') // ul
const $button = document.getElementById('add') // button

$button.addEventListener('click', e => {
  const inputText = $input.value;
  const $newLi = document.createElement('li')
  $newLi.textContent = inputText;
  $newLi.setAttribute('id', inputText)
  $toDoList.appendChild($newLi);

})

$button.addEventListener('keyup', e => {
  if (e.key === 'enter') {
    $button.click();
  }
})




// $input.addEventListener('input', checkText)


// function renderNewTodo({id, text}) {
//   const $toDoList = document.querySelector('.todo-list');
//   const $newLi = document.createElement('li');
//   $newLi.classList.add('todo-list-item');
//   $newLi.dataset.id = id;
//   $newLi.innerHTML = `
//   <label class="checkbox">
//     <input type="checkbox">
//     <span class="text">${text}</span>
//   </label>
//   <div class="modify"><span class="lnr lnr-undo"></span></div>
//   <div class="remove"><span class="lnr lnr-cross-circle"></span></div>  
//   `;
//   $toDoList.appendChild($newLi);
// }

// $button.addEventListener('click', renderNewTodo)