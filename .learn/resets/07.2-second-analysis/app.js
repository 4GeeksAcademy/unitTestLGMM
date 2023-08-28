// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
  // convertimos el valor a dolares
  let valueInDollar = valueInEuro * 1.2;
  // retornamos el valor
  return valueInDollar;
}


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }