const fibonacci = function (num) {
  let arr = [0, 1];

  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }

  for (let i = 1; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }

  return arr[num];
  //console.log(arr[num]);
};

//fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
