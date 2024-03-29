


// ------------



// -------

const countClosure = () => {
  
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return { 
    increase,
    decrease 
};
};

const { increase, decrease } = countClosure();
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());