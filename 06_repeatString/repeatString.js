const repeatString = function (str, cant) {
  if (cant < 0) {
    return "ERROR";
  }

  let result = "";
  for (let i = 0; i < cant; i++) {
    result += str;
  }
  return result;
};

console.log(repeatString("hola", 3));

// Do not edit below this line
module.exports = repeatString;
