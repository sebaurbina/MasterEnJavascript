'use strict'

//Tabla de miultiplicar de un número introducido por pantalla

var numero = parseInt(prompt('¿De qué número quieres la tabla'));

document.write('<h1>Tabla del ' + numero + ' </h1>');
for (var i = 1; i <= 10; i++) {
    document.write(i + ' x ' + numero + ' es igual ' + (numero*i));
    document.write('<br>');
}

