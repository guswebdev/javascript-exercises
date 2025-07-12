const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  let acum = 0;
  let menor = a < b ? a : b;
  let mayor = a > b ? a : b;

  for (let i = menor; i <= mayor; i++) {
    acum += i;
  }

  return acum;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
