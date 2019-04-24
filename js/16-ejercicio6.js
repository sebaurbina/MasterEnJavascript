'use strict'

/*
Hacer un programa que nos diga si un número es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el número
*/

var numero = parseInt(prompt('Introduce un número: '));

while (isNaN(numero)) {
    var numero = parseInt(prompt('Introduce un número: '));
}

if (numero%2==0) {
    alert('Es un número par');
} else {
    alert('Es impar');
}

