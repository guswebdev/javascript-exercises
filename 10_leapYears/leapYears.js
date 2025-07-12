const leapYears = function (year) {
  let result = false;

  if (year % 4 === 0) {
    result = true;
    if (year % 100 === 0) {
      result = false;
      if (year % 400 === 0) {
        result = true;
      }
    }
  }

  return result;
};

// Do not edit below this line
module.exports = leapYears;

/*
Ejercicio 10 - leapYears
Cree una función que determine si un año dado es bisiesto o no. Los años bisiestos se determinan mediante las siguientes reglas:

Los años bisiestos son los años divisibles por cuatro (como 1984 y 2004). Sin embargo, los años divisibles por 100 no son bisiestos (como 1800 y 1900), a menos que sean divisibles por 400 (como 1600 y 2000, que sí fueron bisiestos). (Sí, todo es bastante confuso)

Sugerencias
utilice una sentencia if y && para asegurarse de que todas las condiciones se cumplen correctamente
*/
