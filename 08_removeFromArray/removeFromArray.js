const removeFromArray = function (arr, ...args) {
  const myArr = Array.from(new Set(arr));

  args.forEach((el) => {
    let index = myArr.findIndex((num) => num === el);
    if (index != -1) {
      myArr.splice(index, 1);
    }
  });
  return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
