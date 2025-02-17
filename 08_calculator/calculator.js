const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (const element of arr) {
    sum += element;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
	for (const element of arr) {
    product *= element;
  }
  return product;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num <= 1) {
    return 1;
  }
  else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
