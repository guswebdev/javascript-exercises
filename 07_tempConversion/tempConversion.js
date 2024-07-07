const convertToCelsius = function (fahrenheit) {
  //°C = (°F - 32) ÷ 1,8
  let result = (fahrenheit - 32) / 1.8;

  return formateo(redondeo(result));
};

const convertToFahrenheit = function (celsius) {
  //°F = (°C x 1,8) + 32
  let result = celsius * 1.8 + 32;

  return formateo(redondeo(result));
};

function redondeo(num) {
  return Math.round(num * 10) / 10;
}

function formateo(num) {
  return parseFloat(num.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
