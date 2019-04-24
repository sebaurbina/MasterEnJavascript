'use strict'

// Que pida dos números y que nos diga cual es el mayor, el menor y si son iguales
// PLUS: Si los números no son un número o son menores o iguales a cero, nos lo vuelva a pedir.

var numero1 = parseInt(prompt('Introduce el primer número: ',0));
var numero2 = parseInt(prompt('Introduce el segundo número: ',0));

while (numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt('Introduce el primer número: ',0));
    var numero2 = parseInt(prompt('Introduce el segundo número: ',0));
    console.log(numero1,numero2);
}

if(numero1 == numero2){
    alert('Los números son iguales');
} else if(numero1>numero2){
    alert('El número es mayor es: ' + numero1);
    alert('El número menor es: ' + numero2);
} else if(numero1<numero2){
    alert('El número es mayor es: ' + numero2);
    alert('El número menor es: ' + numero1);
} else{
    alert('Introduce número correctos');
}

