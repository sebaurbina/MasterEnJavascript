'use strict'

// Utilizando un bucle, mostrar la media y la suma de los números introducidos hasta introducir un numero
// negativo y ahí mostrar el resultado.

var suma = 0;
var contador = 0;

do {
    var numero = prompt('Introduce números hasta que metas uno negativo');
    numero = parseInt(numero);

    if (isNaN(numero)) {
        numero = 0;
    }else if (numero >= 0) {
        suma = suma + numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0);

alert('La suma de todos los números es:' + suma);
alert('La media de todos los números es:' + (suma/contador));