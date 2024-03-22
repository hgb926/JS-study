

var a = +prompt('정수 a (가로)')
var b = +prompt('정수 b (세로)')

var text = '';

for (let i = 0; i < b; i++) {
  for (let j = 0; j < a; j++) {
    text += "*"
  }
  text += '\n'
}

alert(text)