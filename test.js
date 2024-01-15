const wrapperFUnction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};

const addOnetodouble = wrapperFUnction(addOne);
console.log(addOnetodouble(4));
