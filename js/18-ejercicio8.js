'use strict'

/*
Calculadora:
- Que pida dos números por pantalla
- Si metemos mal los números nos vuelva a pedir que los introduzcamos. 
- En el cuerpo de la página, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras que hemos pedido anteriormente. 
*/

var numero1 = parseInt(prompt("Introduce el primer número"));
var numero2 = parseInt(prompt("Introduce el segundo número"));

while (numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer número"));
    numero2 = parseInt(prompt("Introduce el segundo número"));
}  

var resultado = "La suma es: " + (numero1+numero2) + "<br/>"
                + "La resta es: " + (numero1-numero2) + "<br/>"
                + "La multiplicación es: " + (numero1*numero2) + "<br/>"
                + "La division es: " + numero1/numero2;

var resultado2 = "La suma es: " + (numero1+numero2) + "\n"
+ "La resta es: " + (numero1-numero2) + "\n"
+ "La multiplicación es: " + (numero1*numero2) + "\n"
+ "La division es: " + numero1/numero2;

document.write(resultado);
alert(resultado2);