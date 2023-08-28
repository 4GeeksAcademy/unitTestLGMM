// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


const { fromDollarToYen, fromYenToPound } = require('./app.js');

test('converts 100 dollars to yen correctly', () => {
    const yenAmount = fromDollarToYen(120);
    // 1 USD = 0.8 EU, 1 EU = 127.9 JPY, so 100 USD = 12790 JPY
    expect(yenAmount).toBe(12790);
});

test('converts 5000 yen to pounds correctly', () => {
    const poundAmount = fromYenToPound(5000);
    // 1 JPY = 0.00625 GBP, so 5000 JPY = 31.25 GBP
    expect(poundAmount).toBe(31.27443315089914);
});
