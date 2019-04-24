'use strict'

/*Mostrar todos los números impares que hay entre dos números introducidos por el usuario*/

var numero1 = parseInt(prompt('Introduce un número'));
var numero2 = parseInt(prompt('Introduce un número'));


//VERSION WHILE
// while (numero1<numero2) {

//     if (numero1%2!=0) {
//         console.log('El número ' + numero1 + ' es impar');
//     }

//     numero1++;
// }


//VERSION FOR
for (numero1;  numero1<numero2 ; numero1++) {
    if (numero1%2!=0) {
        console.log('El número ' + numero1 + ' es impar');
    }
}