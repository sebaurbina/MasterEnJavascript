'use strict'

/*Muestre todos los números divisores de un número introducido en un prompt*/

var numero = parseInt(prompt('Introduce un número'));

for (var i = 1; i<=numero ; i++) {
    
    if (numero%i==0) {
        console.log('Divisor ' + i);
    }
}