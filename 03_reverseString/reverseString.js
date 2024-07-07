const reverseString = function (string) {
  let arrString = string.split("");
  let stringReverse = "";

  for (let i = arrString.length - 1; i >= 0; i--) {
    stringReverse += arrString[i];
  }

  return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
