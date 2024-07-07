const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  let minimo = num1 < num2 ? num1 : num2;
  let maximo = num1 > num2 ? num1 : num2;
  let result = 0;

  for (let i = minimo; i <= maximo; i++) {
    result += i;
  }

  return result;
};

console.log(sumAll(1, 4));
console.log(sumAll(6, 1));

// Do not edit below this line
module.exports = sumAll;
