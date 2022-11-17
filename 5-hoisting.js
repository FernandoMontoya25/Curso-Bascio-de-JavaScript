/*
Hoisting es un termino que no encontrara utilizado en ninguna especificacion previa a ECMAScript 2015. El concepto de Hoisting fue 
pensado como una manera general de referirse a como funcionan los contextos de ejecucion en JavaScript (especificamente las fases de creacion y ejecucion).
Sin embargo el concepto puede ser un poco confuso al principio.
Conceptualmente por ejemplo una estricta definicion de hoisintig sugiere que las declaracion de variables y funciones son fisicamente movidas al comienzo del codigo
pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilacion 
pero queda exactamente en donde las has escrito en el codigo.
*/
/* Una de las ventajas en JavaScript de colocar (ponerlas en memoria) las declaraciones de funciones antes de ejecutar cualquier otro segmento 
de codigo es que permite utilizar una funcion antes de declararla en el codigo por ejemplo */

/************************************************************/
function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
nombreDelGato("Maurizzio");
/****************************************************/

/* El resultado del codigo es: "El nombre de mi gato es Maurizzio" ¨/

/*El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes 
de escribirla: */

/*******************************************************/
nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/********************************************************/


/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/

/* Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por 
la manera en la que el contexto de ejecución trabaja en JavaScript. */

 
