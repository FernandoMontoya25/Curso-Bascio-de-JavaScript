// Buenas practicas: Es mejor crear un nuevo arreglo que editar el que ya tenemos

/* Un array es una estructura de datos que permite almacenar una serie de datos localizados por indices y separados por comas */
// Estos son solo algunos de los muchos metodos que existen

var frutas = ["manzana", "platano", "cereza", "fresa"];
console.log(frutas.length) // Te dice cuantos elementos tiene tu array
console.log(frutas[2]) // Te muestra la variable que esta en la posicion 2

// Añadir elementos al final del array
var masFrutas = frutas.push("uvas");
// Eliminar el ultimo elemento del array
var ultimo = frutas.pop("uvas");
// Agregar elementos al principio de nuestro array
var nuevo = frutas.unshift("uvas");
// Elimina el primer elemento de nuestro array
var borrar = frutas.shift("uvas");
// La forma en la que tu podrias ver en que posicion esta una variable
var posicion = frutas.indexOf("cereza");
// Eliminar conforme la ubicacion
numeros.splice(2, 1);

console.log(frutas) // Mandamos llamar nuestro array
