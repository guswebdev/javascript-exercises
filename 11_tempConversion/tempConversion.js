//Para convertir de ºF a ºC use la fórmula:   ºC = (ºF-32) ÷ 1.8.
const convertToCelsius = (fahrenheit) =>
  parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));

//Para convertir de ºC a ºF use la fórmula:   ºF = ºC x 1.8 + 32.
const convertToFahrenheit = (celcius) =>
  parseFloat((celcius * 1.8 + 32).toFixed(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
