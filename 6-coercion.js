/*Que es la coercion
Coercion es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coercion: 

Coercion implicita: Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Un ejemplo de esto seria cuando tratas de sumar dos numeros con letras*/

//Coercion implicita

var a = 3;
var y = "5";
x + y // 35 Se cambio el numero 3 por un string

/*Coercion explicita 
Es cuando obligamos a que cambie el tipo de valor.
Un ejemplo esto seria cuando nosotros obligamos a hacer el cambio de una variable 
por ejemplo de numero a letra o contrario*/

var x = "3";
var y = Number(x);
console.log(y) // Se cambio forsozamente el string(3) por un numero

 
