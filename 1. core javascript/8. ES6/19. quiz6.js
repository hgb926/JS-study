

// createCalculator를 호출하면 반환되는 헬퍼함수는 
// 3가지의 기능을 갖고 있는데

function createCalculator() {
  let start = 0
  const add = (n) => start = start + n;
  const subtract = (n) => start = start - n;
  const getTotal = () => start;
  return {
    add,
    subtract,
    getTotal
  }
}

const calculator = createCalculator();
console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.add(14)); // 17
console.log(calculator.add(21)); // 38
console.log(calculator.subtract(29)); // 9
console.log(calculator.getTotal()); // 9