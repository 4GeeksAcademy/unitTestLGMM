// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
  // convertimos el valor a dolares
  let valueInDollar = valueInEuro * 1.2;
  // retornamos el valor
  return valueInDollar;
}

let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}

const fromDollarToYen = function(amountInDollars) {
  // convertimos el monto a yenes japoneses
  let amountInYen = amountInDollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
  // retornamos el monto
  return amountInYen;
}


const fromYenToPound = function(amountInYen) {
  // convertimos el monto a libras esterlinas
  let amountInPound = amountInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
  // retornamos el monto
  return amountInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
  return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


console.log(fromYenToPound(5000));