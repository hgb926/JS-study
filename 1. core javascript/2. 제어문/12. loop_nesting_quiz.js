

var a = +prompt('정수 a')
var b = +prompt('정수 b')

var text = '';

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    text += "*"
  }
  text += '\n'
}

alert(text)