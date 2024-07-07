const removeFromArray = function (arr, ...removeNum) {
  let arrArgs = Array.from(removeNum);
  let arrFact = [...new Set(arr)];

  for (item of arrArgs) {
    let indice = arrFact.indexOf(item);
    if (indice != -1) {
      arrFact.splice(indice, 1);
    }
  }

  return arrFact;
};

// Do not edit below this line
module.exports = removeFromArray;
