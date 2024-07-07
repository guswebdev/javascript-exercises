const leapYears = function (año) {
  return año % 4 === 0 && (!(año % 100 === 0) || año % 400 === 0)
    ? true
    : false;
};

// Do not edit below this line
module.exports = leapYears;
